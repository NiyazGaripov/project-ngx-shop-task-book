import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product: IProduct = {} as ICartProduct;

  @Output() goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
