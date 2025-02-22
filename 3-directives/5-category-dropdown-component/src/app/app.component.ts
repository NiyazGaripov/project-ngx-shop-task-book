import { Component } from '@angular/core';
import { categories, ICategory } from '../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент выбора категории товара';
  public categories: ICategory[] = categories;
  public terminalMessage = null;

  public selectSubCategory(subCategory: string) {
    this.terminalMessage = `Переход на категорию товара: ${subCategory}`;
  }
}
