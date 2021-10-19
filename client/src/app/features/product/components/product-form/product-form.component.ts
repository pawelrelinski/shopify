import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {TestProductService} from '@features/product/services';
import {ProductFormMode, ProductResponse} from '@features/product/models';


@Component({
  selector: 'shopify-product-form',
  templateUrl: './product-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductFormComponent),
      multi: true
    }
  ]
})
export class ProductFormComponent implements OnInit {
  @Input()
  public formMode!: ProductFormMode;

  public productForm!: FormGroup;

  private productId!: number;
  private product!: ProductResponse;
  private defaultProductFormConfig = {
    general: {
      name: { value: '', disabled: false },
      regularPrice: { value: 0.00, disabled: false },
      salePrice: { value: 0.00, disabled: false },
      description: { value: '', disabled: false }
    },
    inventory: {
      stockQuantity: { value: 0, disabled: false }
    },
    shipping: {
      weight: { value: 0.00, disabled: false },
      shippingMethod: { value: '', disabled: false }
    }
  };

  constructor(private fb: FormBuilder,
              private testProductService: TestProductService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.setProductForm();
  }

  public onSubmit(): void {
    console.log(this.productForm);
  }

  private setProductData(): void {
    this.activatedRoute.params.pipe(
      mergeMap(params => {
        this.productId = params.productId as number;
        return this.testProductService.getById(this.productId);
      })
    ).subscribe((product: ProductResponse) => {
      this.product = product;
    });
  }

  private setProductForm(): void {
    if (this.formMode === ProductFormMode.EDIT) {
      this.setProductData();
      this.setValuesOfFormControls();
    }

    if (this.formMode === ProductFormMode.READONLY) {
      this.setProductData();
      this.setValuesOfFormControls(true);
    }

    this.productForm = this.fb.group({
      general: this.fb.group({
        name: [this.defaultProductFormConfig.general.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(128)
        ]],
        regularPrice: [this.defaultProductFormConfig.general.regularPrice, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        salePrice: [this.defaultProductFormConfig.general.salePrice, [
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        description: [this.defaultProductFormConfig.general.description, [
          Validators.required,
          Validators.minLength(3)
        ]]
      }),
      inventory: this.fb.group({
        stockQuantity: [this.defaultProductFormConfig.inventory.stockQuantity, [
          Validators.required,
          Validators.min(0)
        ]],
        allowBackorders: [false]
      }),
      shipping: this.fb.group({
        weight: [this.defaultProductFormConfig.shipping.weight, [
          Validators.required,
          Validators.min(0.00)
        ]],
        shippingMethod: [this.defaultProductFormConfig.shipping.shippingMethod, [
          Validators.required
        ]]
      })
    });
  }

  private setValuesOfFormControls(disabled: boolean = false): void {
    const { name, description, amount: stockQuantity, price: regularPrice } = this.product.attributes;
    this.defaultProductFormConfig.general.name = { value: name, disabled };
    this.defaultProductFormConfig.general.regularPrice = { value: regularPrice, disabled };
    this.defaultProductFormConfig.general.description = { value: description, disabled };
    this.defaultProductFormConfig.inventory.stockQuantity = { value: stockQuantity, disabled };
  }
}
