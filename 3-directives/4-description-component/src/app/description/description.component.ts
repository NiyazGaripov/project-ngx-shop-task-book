import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';
@Component({
  selector: 'ngx-shop-product-description',
  templateUrl: './description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  @Input() public product: IProduct = null;

  @Output()
  public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

  public isShowDescription = true;

  public close!: () => void;
  public save!: (value: object) => void;
  public toggleTab(): void {
    this.isShowDescription = !this.isShowDescription;
  }

  public addFeedback(value: string): void {
    this.addFeedbackEvent.emit(value);
  }
}
