import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipePipe implements PipeTransform {

  transform(value, args: string[]): any {
      return Object.keys(value);
  }
}
