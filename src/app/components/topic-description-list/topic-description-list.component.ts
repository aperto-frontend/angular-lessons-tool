import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-description-list',
  template: `
    <app-description-list [items]="descriptions"></app-description-list>
  `,
  providers: []
})
export class TopicDescriptionListComponent implements OnInit {

  descriptions: any[] = [];

  constructor() {

  }

  ngOnInit() {

  }

}
