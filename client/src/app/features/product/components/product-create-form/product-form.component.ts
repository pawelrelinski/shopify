import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

import {TestProductService} from '@features/product/services';
import {ProductFormMode, ProductResponse} from '@features/product/models';
import {forkJoin} from "rxjs";
import {mergeMap} from "rxjs/operators";

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
  formMode!: ProductFormMode;

  public productForm!: FormGroup;

  private productId!: number;
  private product!: ProductResponse;

  constructor(private fb: FormBuilder,
              private testProductService: TestProductService,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    switch (this.formMode) {
      case ProductFormMode.READONLY:
        this.setProductId();
        this.setProduct();
        this.setAddNewProductForm();
        break;
      case ProductFormMode.EDIT:
        this.setProductId();
        this.setProduct();
        this.setEditProductForm();
        break;
      case ProductFormMode.CREATE:
        this.setAddNewProductForm();
        break;
    }
  }

  public onSubmit(): void {
    console.log(this.productForm);
  }

  private setProductId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId as number;
    });
  }

  private setProduct(): void {
    this.testProductService.getById(this.productId).subscribe((product: ProductResponse) => {
      this.product = product;
    });
  }

  private setEditProductForm(): void {
    const { name, description, amount, price } = this.product.attributes;
    this.productForm = this.fb.group({
      general: this.fb.group({
        name: [name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(128)
        ]],
        regularPrice: [price, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        salePrice: [0.00, [
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        description: [description, [
          Validators.required,
          Validators.minLength(3)
        ]]
      }),
      inventory: this.fb.group({
        stockQuantity: [amount, [
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

  private setAddNewProductForm(): void {
    this.productForm = this.fb.group({
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
}
