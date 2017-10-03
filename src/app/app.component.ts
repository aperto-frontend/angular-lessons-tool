import { Component } from '@angular/core';
import { WebsocketsService } from './services/websockets/websockets.service';
import { VotesService } from './services/votes/votes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Session Tool';

  constructor() {

  }
}
