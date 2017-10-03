import { Injectable } from '@angular/core';
import calculateValuePercentArray from '../../shared/helpers/calculations/calculate-value-percent-array';
import { WebsocketsService } from '../websockets/websockets.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import randomColor from '../../shared/helpers/random/random-color';
import { TopicsService } from '../topics/topics.service';

const TOPICS: string[] = [
  'Services',
  'Routing',
  'Forms',
  'Authentication',
  'Animations',
  'Testing',
  'Modules',
  'Observables',
  'ngrx/store',
];

const VOTES: {topic: string, count: number, percent: number}[] = [
  ...TOPICS.map((topic, index) => {
    return {
      topic,
      count: 0,
      percent: 0,
      color: randomColor()
    };
  }),
  {
    topic: 'not voted',
    count: 0,
    percent: 0,
    color: randomColor()
  }
];

@Injectable()
export class VotesService {

  votes$: BehaviorSubject<{topic: string, count: number, percent: number}[]> = new BehaviorSubject([]);

  constructor(
    private websocketsService: WebsocketsService,
    private topicsService: TopicsService
  ) {
    this.setTopicVotesPercentage = this.setTopicVotesPercentage.bind(this);

    this.votes$.next(this.topicsService.getTopics());

    this.websocketsService
      .connect()
      .subscribe(this.setTopicVotesPercentage);
  }

  getTopicVotes() {
    return TOPICS;
  }

  setTopicVotesPercentage(message) {
    const rawMessageVoteData = JSON.parse(message.data);
    const currentVoteData = JSON.parse(JSON.stringify(VOTES));
    let totalCount = 0;

    Object.keys(rawMessageVoteData).forEach(vote => {
      let index = currentVoteData.length - 1;
      currentVoteData.filter((currentVote, i) => {
        if (currentVote.topic === rawMessageVoteData[vote]) {
          index = i;
        }
      });

      currentVoteData[index].count++;
      totalCount++;
    });

    const countArray = currentVoteData.map((item) => {
      return item.count;
    });
    const percentArray = calculateValuePercentArray(totalCount, countArray);
    const resultArray = currentVoteData.map((item, index) => {
      item.percent = percentArray[index];
      return item;
    });

    this.votes$.next(resultArray);
  }

  closeTopicVote() {
    this.websocketsService.close();
  }
}
