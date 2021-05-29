import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {

  @Input() product: ICartProduct = {} as ICartProduct;

  @Output() increment: EventEmitter<void> = new EventEmitter();
  @Output() decrement: EventEmitter<void> = new EventEmitter();

  public incrementProductInCart(): void {
    this.increment.emit();
  }

  public decrementProductInCart(): void {
    this.decrement.emit();
  }
}
