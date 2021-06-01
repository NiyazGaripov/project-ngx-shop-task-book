import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    const fractionalPart = value % 1;

    if (fractionalPart < 0.25) {
      return Math.floor(value);
    } else if (fractionalPart >= 0.25 && fractionalPart < 0.75) {
      return Math.floor(value) + 0.5;
    } else if (fractionalPart > 0.75) {
      return Math.ceil(value);
    }
  }
}
