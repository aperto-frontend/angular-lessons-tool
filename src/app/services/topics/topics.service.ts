import { Injectable } from '@angular/core';
import calculateValuePercentArray from './calculate-value-percent-array';
import { WebsocketsService } from '../websockets/websockets.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
      percent: 0
    };
  }),
  {
    topic: 'not voted',
    count: 0,
    percent: 0
  }
];

@Injectable()
export class TopicsService {

  websocketsService: WebsocketsService;

  topicVotesPercentage$: BehaviorSubject<{topic: string, count: number, percent: number}[]> = new BehaviorSubject(VOTES);

  constructor(websocketsService: WebsocketsService) {
    this.websocketsService = websocketsService;

    this.setTopicVotesPercentage = this.setTopicVotesPercentage.bind(this);

    this.websocketsService
      .connect()
      .subscribe(this.setTopicVotesPercentage);
  }

  getTopics() {
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

    this.topicVotesPercentage$.next(resultArray);
  }

  closeTopicVote() {
    this.websocketsService.close();
  }
}
