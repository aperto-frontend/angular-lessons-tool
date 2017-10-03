import { ITopic } from '../interfaces/topic.interface';

export class Topic implements ITopic {
  uid: string;

  title: string;

  constructor(options: ITopic) {
    this.uid = options.uid;
    this.title = options.title;
  }
}
