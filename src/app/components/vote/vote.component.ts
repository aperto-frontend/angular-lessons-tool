import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsocketsService } from '../../services/websockets/websockets.service';
import { TopicsService } from '../../services/topics/topics.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  topicVotes$: Observable<any>;

  topics: any[];

  constructor(private websocketsService: WebsocketsService,
              private topicsService: TopicsService) {
  }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
    this.topicVotes$ = this.topicsService.topicVotesPercentage$;
  }

  onSelectedTopicChange(selectedTopic) {
    console.log(selectedTopic);
    this.websocketsService.send('pollVotes', selectedTopic);
  }
}
