import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  constructor() {}

  @Input() public products = null;
  @Input() public categories = null;

  public goToBasket(): void {
  }

  public goToProduct(): void {
  }

  public redirectTo(evt: string): void {
  }
}
