import { Component, OnInit } from '@angular/core';
import { DescriptionsService } from '../../services/descriptions/descriptions.service';
import {
  topicDescriptionData,
  topicDescriptionDataNext
} from '../../services/descriptions/topic-description.data';

@Component({
  selector: 'app-topic-description-list',
  template: `
    <app-description-list [items]="descriptions"></app-description-list>
  `,
  providers: [DescriptionsService]
})
export class TopicDescriptionListComponent implements OnInit {

  descriptions: any[] = [];

  constructor(private descriptionsService: DescriptionsService) {
    this.descriptionsService.descriptions = topicDescriptionDataNext;
  }

  ngOnInit() {
    this.descriptions = this.descriptionsService.descriptions;
  }

}
