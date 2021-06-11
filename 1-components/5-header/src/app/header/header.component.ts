import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Output() goToBasket: EventEmitter<number> = new EventEmitter<number>();

  public counter = 5;

  public redirectTo(): void {
    this.goToBasket.emit();
  }
}
