import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WebsocketsService {

  private socket: any;

  constructor() { }

  connect(): Observable<any> {

    this.socket = new WebSocket(`ws://${window.location.hostname}:8080`);
    return Observable.fromEvent(this.socket, 'message');
  }

  /**
   * @example
   * this.websocketsService.send('pollVotes', this.selectedTopic);
   * @param type
   * @param message
   */
  send(type, message) {
    this.socket.send(JSON.stringify({[type]: message}));
  }

  close() {
    this.socket.close();
  }
}
