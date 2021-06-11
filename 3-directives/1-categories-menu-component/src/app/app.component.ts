import { Component } from '@angular/core';
import {categories, ICategory} from '../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public categories: ICategory[] = categories;
  public title = '1. Директивы (Компонент выбора подкатегории на странице рекомендации)';
  public terminalMessage: any = '';

  public redirectTo(subCategory: string) {
    this.terminalMessage = `Переход на категорию товара: ${subCategory}`;
  }
}
