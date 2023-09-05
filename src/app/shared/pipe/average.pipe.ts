import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {
  transform(items: number[]): any {
    return Math.trunc(items.reduce((a, b) => a + +b, 0) / items.length);
  }
} 