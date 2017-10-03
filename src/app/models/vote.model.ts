import { IVote } from '../interfaces/vote.interface';

export class Vote implements IVote {
  title: string;

  count: number;

  percent: number;

  color: string;

  constructor(options: IVote) {
    this.title = options.title;
    this.count = options.count;
    this.percent = options.percent;
    this.color = options.color;
  }
}
