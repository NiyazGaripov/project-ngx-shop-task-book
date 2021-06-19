import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'Компонент страницы продукта';
  public product$: Observable<IProduct> = null;

  constructor(
    private productsService: ProductsService,
  ) {}

  public ngOnInit(): void {
    this.product$ = this.productsService.getProductById('65-165-sm-televizor-led-lg-65um7610-serebristyj');
  }
}
