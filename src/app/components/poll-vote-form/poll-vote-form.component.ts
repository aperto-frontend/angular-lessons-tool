import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poll-vote-form',
  templateUrl: './poll-vote-form.component.html',
  styleUrls: ['./poll-vote-form.component.scss']
})
export class PollVoteFormComponent implements OnInit {

  selectedTopic: string;

  @Output()
  selectedTopicChange: EventEmitter<string> = new EventEmitter();

  @Input()
  topics: any[];

  @Input()
  topicVotes: any[];

  constructor() {
  }

  ngOnInit() {

  }

  vote() {
    this.selectedTopicChange.emit(this.selectedTopic);
  }

}
