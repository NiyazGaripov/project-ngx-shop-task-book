import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-shop-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass'],
})
export class OrderFormComponent implements OnInit {
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      name: ['Angular', [Validators.required]],
      telephone: ['+44 7911 123456', [Validators.required, this.phoneValidator]],
      email: ['angular@gmail.com', [Validators.email, Validators.required]],
      address: ['Angular 55', [Validators.required]],
    });
  }

  public submit(): void {
    if (this.form.valid) {
      this.confirm.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.setErrors({
        email: this.form.get('email')?.errors,
        telephone: this.form.get('telephone')?.errors,
        name: this.form.get('name')?.errors,
      });
    }
  }

  public phoneValidator(control: FormControl): ValidationErrors | null {
    const phone = control.value;
    return phone && phone.substring(0, 1) === '+' && phone.length >= 13
      ? null
      : {
        isNotMatch: true,
        error: 'Телефон должен быть в формате +44 7911 123456',
      };
  }
}
