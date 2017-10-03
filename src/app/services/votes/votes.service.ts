import { Injectable } from '@angular/core';
import calculateValuePercentArray from '../../shared/helpers/calculations/calculate-value-percent-array';
import { WebsocketsService } from '../websockets/websockets.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import randomColor from '../../shared/helpers/random/random-color';
import { TopicsService } from '../topics/topics.service';
import { Vote } from '../../models/vote.model';

let voteNumber = 1;

@Injectable()
export class VotesService {

  private _votes: Vote[] = [];

  votes$: BehaviorSubject<Vote[]> = new BehaviorSubject([]);

  constructor(
    private websocketsService: WebsocketsService,
    private topicsService: TopicsService
  ) {
    this.setVotesPercentage = this.setVotesPercentage.bind(this);

    this.votes$.next(this.getVotes());

    this.websocketsService
      .connect(`poll/${voteNumber++}`)
      .subscribe(this.setVotesPercentage);
  }

  getVotes(): Vote[] {
    const topics = this.topicsService.getTopics();
    const notVotedDefault = new Vote({
        title: 'not voted',
        count: 0,
        percent: 0,
        color: randomColor()
    });

    this._votes = topics.reduce((prev, next) => {
      const foundVote = this._votes.filter((vote) => vote.title === next.title)[0];
      if (foundVote) {
        prev.push(foundVote);
      } else {
        prev.push(new Vote({
          title: next.title,
          count: 0,
          percent: 0,
          color: randomColor()
        }));
      }

      return prev;
    }, []);

    this._votes.push(notVotedDefault);

    return this._votes;
  }

  setVotesPercentage(message) {
    const rawMessageVoteData = JSON.parse(message.data);
    const currentVoteData = JSON.parse(JSON.stringify(this.getVotes()));
    let totalCount = 0;

    console.log(message);

    Object.keys(rawMessageVoteData).forEach(vote => {
      let index = currentVoteData.length - 1;
      currentVoteData.filter((currentVote, i) => {
        if (currentVote.title === rawMessageVoteData[vote]) {
          index = i;
        }
      });

      if (currentVoteData[index]) {
        currentVoteData[index].count++;
        totalCount++;
      }
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

  closeVote() {
    this.websocketsService.close();
  }
}
