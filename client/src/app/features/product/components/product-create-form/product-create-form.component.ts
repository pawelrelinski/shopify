import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'shopify-product-create-form',
  templateUrl: './product-create-form.component.html',
  styleUrls: ['./product-create-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductCreateFormComponent),
      multi: true
    }
  ]
})
export class ProductCreateFormComponent implements OnInit {
  public addNewForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.addNewForm = this.fb.group({
      general: this.fb.group({
        name: ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(128)
        ]],
        regularPrice: [0.00, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        salePrice: [0.00, [
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        description: ['', [
          Validators.required,
          Validators.minLength(3)
        ]]
      }),
      inventory: this.fb.group({
        stockQuantity: [0, [
          Validators.required,
          Validators.min(0)
        ]],
        allowBackorders: [false]
      }),
      shipping: this.fb.group({
        weight: [0.00, [
          Validators.required,
          Validators.min(0.00)
        ]],
        shippingMethod: ['', [
          Validators.required
        ]]
      })
    });
  }

  public onSubmit(): void {
    console.log(this.addNewForm);
  }
}
