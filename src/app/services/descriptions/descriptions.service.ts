import { Injectable } from '@angular/core';

@Injectable()
export class DescriptionsService {
  private _descriptions: any[];

  set descriptions(val) {
    this._descriptions = val;
  }

  get descriptions() {
    return this._descriptions;
  }
}
