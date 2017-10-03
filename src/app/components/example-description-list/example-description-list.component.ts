import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-description-list',
  template: `
    <app-description-list [items]="descriptions"></app-description-list>
  `,
  providers: []
})
export class ExampleDescriptionListComponent implements OnInit {

  descriptions: any[] = [];

  constructor() {

  }

  ngOnInit() {

  }

}
