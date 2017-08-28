import { Component } from '@angular/core';
import { WebsocketsService } from './services/websockets/websockets.service';
import { TopicsService } from './services/topics/topics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngulAr SESsion Topic VOte';

  constructor(websocketsService: WebsocketsService, topicsService: TopicsService) {

  }
}
