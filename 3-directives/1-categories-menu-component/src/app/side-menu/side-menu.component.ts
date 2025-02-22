import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  @Input() public categories: ICategory[] = [];

  @Output() public categoryChange: EventEmitter<string> = new EventEmitter<string>();

  public currentName: string | null = null;

  public hover(name: string): void {
    this.currentName = name;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }

  public redirectTo(id: string): void {
    this.categoryChange.emit(id);
  }
}
