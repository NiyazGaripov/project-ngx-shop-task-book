import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    const HUNDREDTH = 100;
    const TENTH = 10;
    const NUMERAL_FOR_NOMINATIVE_SINGULAR_CASE = 1;
    const MIN_NUMERAL_FOR_GENITIVE_SINGULAR_CASE = 2;
    const MAX_NUMERAL_FOR_GENITIVE_SINGULAR_CASE = 4;
    const MIN_NUMERAL_FOR_GENITIVE_PLURAL = 5;
    const MAX_NUMERAL_FOR_GENITIVE_PLURAL = 20;

    let residue = countOfReviews % HUNDREDTH;

    if (countOfReviews === 0 || countOfReviews === undefined) {
      return 'Нет отзывов';
    }

    if (residue >= MIN_NUMERAL_FOR_GENITIVE_PLURAL && residue <= MAX_NUMERAL_FOR_GENITIVE_PLURAL) {
      return `${countOfReviews} отзывов`;
    } else {
      residue %= TENTH;

      if (residue === NUMERAL_FOR_NOMINATIVE_SINGULAR_CASE) {
        return `${countOfReviews} отзыв`;
      } else if (residue >= MIN_NUMERAL_FOR_GENITIVE_SINGULAR_CASE && residue <= MAX_NUMERAL_FOR_GENITIVE_SINGULAR_CASE) {
        return `${countOfReviews} отзыва`;
      } else {
        return `${countOfReviews} отзывов`;
      }
    }
  }
}
