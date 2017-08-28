import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterable'
})
export class IterablePipe implements PipeTransform {

  transform(map: {}): { key: any, value: any }[] {
    if (!map) {
      return null;
    }
    return Object.keys(map).map(key => ({ key: key, value: map[key] }));
  }

}
