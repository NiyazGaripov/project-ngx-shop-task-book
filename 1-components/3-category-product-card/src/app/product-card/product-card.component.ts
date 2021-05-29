import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {

  @Input() product: IProduct = {} as ICartProduct;

  @Output() addToCart: EventEmitter<void> = new EventEmitter<void>();
  @Output() goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public addToBasket(): void {
    this.addToCart.emit();
  }

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
