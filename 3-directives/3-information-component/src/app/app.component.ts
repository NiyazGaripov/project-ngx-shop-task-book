import { Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент информации о товаре';
  public product: IProduct = oneProduct;
  public terminalMessage = null;
  public addToCart(value: string): void {
    this.terminalMessage = value;
  }
}
