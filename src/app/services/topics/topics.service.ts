import { Injectable } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { ITopic } from '../../interfaces/topic.interface';

@Injectable()
export class TopicsService {

  protected _topics: Topic[] = [];

  constructor() {
    this.addTopic = this.addTopic.bind(this);

    this.addTopics({
      uid: 'forms',
      title: 'Forms'
    }, {
      uid: 'typescript',
      title: 'TypeScript'
    }, {
      uid: 'observables',
      title: 'Observables'
    });
  }

  addTopics(...args) {
    let topicsList = args;
    // if first parameter is array use it as the list of topics
    if (args[0] instanceof Array) {
      topicsList = args[0];
    }

    topicsList.forEach(this.addTopic);
  }

  addTopic(topicData: ITopic) {
    this._topics.push(new Topic(topicData));
  }

  getTopics() {
    return this._topics;
  }
}
