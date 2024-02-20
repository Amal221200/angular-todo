import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }

}
