import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class WebsocketsService {

  private socket: any;

  constructor() {

  }

  connect(route: string): Observable<any> {

    this.socket = new WebSocket(`ws://${window.location.hostname}:8080/${route}`);
    return Observable.fromEvent(this.socket, 'message');
  }

  /**
   * @example
   * this.websocketsService.send('pollVotes', 'Topic Title');
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
