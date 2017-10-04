import { Component, OnInit } from '@angular/core';
import { DescriptionsService } from '../../services/descriptions/descriptions.service';
import { exampleDescriptionData } from '../../services/descriptions/example-description.data';

@Component({
  selector: 'app-example-description-list',
  template: `
    <app-description-list [items]="descriptions"></app-description-list>
  `,
  providers: [DescriptionsService]
})
export class ExampleDescriptionListComponent implements OnInit {

  descriptions: any[] = [];

  constructor(private descriptionsService: DescriptionsService) {
    this.descriptionsService.descriptions = exampleDescriptionData;
  }

  ngOnInit() {
    this.descriptions = this.descriptionsService.descriptions;
  }

}
