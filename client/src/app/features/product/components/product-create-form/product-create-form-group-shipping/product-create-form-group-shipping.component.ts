import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ShippingMethod } from '@features/product/models';

@Component({
  selector: 'shopify-product-create-form-group-shipping',
  templateUrl: './product-create-form-group-shipping.component.html',
  styleUrls: ['./product-create-form-group-shipping.component.scss'],
})
export class ProductCreateFormGroupShippingComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public shippingForm!: FormGroup;
  public moreShippingMethodsOptionsIsShow = false;
  public readonly shippingMethods: ShippingMethod[] = [
    { name: 'Collection in person', value: 'collection-in-person' },
    { name: 'InPost parcel', value: 'inpost-parcel' },
    { name: 'Courier consignment', value: 'courier-consignment' },
  ];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.setShippingForm();
    this.onFormReady.emit(this.shippingForm);
  }

  public openShippingMethodsOptions(): void {
    this.moreShippingMethodsOptionsIsShow = true;
  }

  public closeShippingMethodsOptions(): void {
    this.moreShippingMethodsOptionsIsShow = false;
  }

  public onCheckboxChange(event: any): void {
    const checkArray: FormArray = this.shippingForm.get('shippingMethods') as FormArray;

    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let index: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(index);
          return;
        }
        index++;
      });
    }
  }

  private setShippingForm(): void {
    this.shippingForm = this.fb.group({
      expectedDeliveryTime: this.fb.control(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
      shippingMethods: this.fb.array([], [Validators.required]),
    });
  }
}
