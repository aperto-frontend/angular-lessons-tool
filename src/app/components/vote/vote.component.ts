import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsocketsService } from '../../services/websockets/websockets.service';
import { VotesService } from '../../services/votes/votes.service';
import { TopicsService } from '../../services/topics/topics.service';
import { ITopic } from '../../interfaces/topic.interface';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  providers: [VotesService, TopicsService, WebsocketsService]
})
export class VoteComponent implements OnInit {

  @Input() topicsData: ITopic[];

  votes$: Observable<any>;

  topics: any[];

  constructor(private websocketsService: WebsocketsService,
              private topicsService: TopicsService,
              private votesService: VotesService) {
  }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
    this.votes$ = this.votesService.votes$;

    this.votes$.subscribe((vote) => console.log(vote));
  }

  onSelectedTopicChange(selectedTopic) {
    if (selectedTopic && selectedTopic.title) {
      this.websocketsService.send('pollVotes', selectedTopic.title);
    }
  }
}
