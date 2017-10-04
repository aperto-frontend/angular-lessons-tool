import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-list',
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.scss']
})
export class DescriptionListComponent implements OnInit {

  @Input()
  items: any[];

  constructor() {

  }

  ngOnInit() {
  }

}
