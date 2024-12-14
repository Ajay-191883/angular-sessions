import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPipe',
})
export class WeightPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value) + ' Kg';
  }
}
