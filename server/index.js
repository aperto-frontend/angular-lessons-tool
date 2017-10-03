const WebSocket = require('ws');
const port = 8080;
const wss = new WebSocket.Server({ host: '0.0.0.0', port: port });

const votes = {};

wss.on('connection', function connection(ws, req) {

    const ip = req.connection.remoteAddress;

    votes[ip] = '';

    ws.on('message', function incoming(message) {

        console.log(ip, message);

        try {

            const messageObj = JSON.parse(message);

            if (messageObj.pollVotes) {
                votes[ip] = messageObj.pollVotes;
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        console.log(votes);
                        client.send(JSON.stringify(votes));
                    }
                });
            }

        } catch(e) {
            console.error(e);
        }


    });

    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            console.log(votes);
            client.send(JSON.stringify(votes));
        }
    });
});
