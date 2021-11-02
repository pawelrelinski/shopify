import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ProductFormMode, ProductResponse} from '@features/product/models';
import {ProductService} from '@features/product/services';


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
  public buttonIsShow!: boolean;

  private productId!: number;
  private product!: ProductResponse;
  private defaultProductFormConfig = {
    general: {
      name: {value: '', disabled: false},
      regularPrice: {value: 0.00, disabled: false},
      salePrice: {value: 0.00, disabled: false},
      description: {value: '', disabled: false}
    },
    inventory: {
      stockQuantity: {value: 0, disabled: false}
    },
    shipping: {
      weight: {value: 0.00, disabled: false},
      shippingMethod: {value: '', disabled: false}
    },
    variations: {
      category: {value: '', disabled: false},
      color: {value: '', disabled: false}
    }
  };

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setProductForm();
  }

  public onSubmit(): void {
    const {general, inventory, variations} = this.productForm.controls;
    const product = {
      name: general.get('name')?.value,
      description: general.get('description')?.value,
      price: general.get('regularPrice')?.value,
      amount: inventory.get('stockQuantity')?.value,
      category: variations.get('category')?.value,
      color: variations.get('color')?.value
    };

    this.productService.create(product).subscribe(
      (response) => {
        if (+response.status === 200) {
          console.log('Product have been created');
        }
      },
      error => {
        if (!error.ok) {
          console.log({
            name: error.name,
            message: error.message
          });
        }
      });
  }

  private setProductData(): void {
    this.activatedRoute.params.pipe(
      mergeMap(params => {
        this.productId = params.productId as number;
        return this.productService.getById(this.productId);
      })
    ).subscribe((product: ProductResponse) => {
      this.product = product;
    });
  }

  private setProductForm(): void {
    if (this.formMode === ProductFormMode.EDIT) {
      this.setProductData();
      this.setValuesOfFormControls();
      this.buttonIsShow = true;
    }

    if (this.formMode === ProductFormMode.READONLY) {
      this.setProductData();
      this.setValuesOfFormControls(true);
      this.buttonIsShow = false;
    }

    this.buttonIsShow = true;

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
      }),
      variations: this.fb.group({
        category: [this.defaultProductFormConfig.variations.category, [
          Validators.maxLength(50),
          Validators.minLength(3)
        ]],
        color: [this.defaultProductFormConfig.variations.color, [
          Validators.maxLength(50),
          Validators.minLength(3)
        ]]
      })
    });
  }

  private setValuesOfFormControls(disabled: boolean = false): void {
    const {name, description, amount: stockQuantity, price: regularPrice, category, color} = this.product.attributes;
    this.defaultProductFormConfig.general.name = {value: name, disabled};
    this.defaultProductFormConfig.general.regularPrice = {value: regularPrice, disabled};
    this.defaultProductFormConfig.general.description = {value: description, disabled};
    this.defaultProductFormConfig.inventory.stockQuantity = {value: stockQuantity, disabled};
    this.defaultProductFormConfig.variations.category = {value: category, disabled};
    this.defaultProductFormConfig.variations.color = {value: color, disabled};
  }
}
