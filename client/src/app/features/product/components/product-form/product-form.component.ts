import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

import {AbstractControl, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {ProductFormMode, ProductResponse} from '@features/product/models';
import {ProductService} from '@features/product/services';
import {Response} from '@core/interfaces';


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
  private product!: Response<ProductResponse>;
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
              private router: Router,
              private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setProductForm();
  }

  public onSubmit(): void {
    const {general, inventory, variations} = this.productForm.controls;
    const product = ProductFormComponent.createProductObjectToSend(general, inventory, variations);

    this.productService.create(product).subscribe(
      (response) => {
        if (+response.status === 200) {
          this.navigateToProductsManagePage();
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

  public onDelete(): void {
    this.productService.delete(this.productId).subscribe(response => {
      if (response.status === 204) {
        this.navigateToProductsManagePage();
      }
    });
  }

  private setProductData(): void {
    this.activatedRoute.params.pipe(
      mergeMap(params => {
        this.productId = params.productId as number;
        return this.productService.getById(this.productId);
      })
    ).subscribe((product: Response<ProductResponse>) => {
      this.product = product;
    });
  }

  private setProductForm(): void {
    switch (this.formMode) {
      case ProductFormMode.CREATE:
        this.buttonIsShow = true;
        this.productForm = this.getProductFormControlsConfig();
        break;
      case ProductFormMode.EDIT:
        this.setProductData();
        this.setValuesOfFormControls();
        this.buttonIsShow = true;
        break;
      case ProductFormMode.READONLY:
        this.setProductData();
        this.setValuesOfFormControls(true);
        this.buttonIsShow = false;
        break;
    }
  }

  private setValuesOfFormControls(disabled: boolean = false): void {
    const {
      name,
      description,
      amount: stockQuantity,
      price: regularPrice,
      category,
      color
    } = this.product.data.attributes;
    this.defaultProductFormConfig.general.name = {value: name, disabled};
    this.defaultProductFormConfig.general.regularPrice = {value: regularPrice, disabled};
    this.defaultProductFormConfig.general.description = {value: description, disabled};
    this.defaultProductFormConfig.inventory.stockQuantity = {value: stockQuantity, disabled};
    this.defaultProductFormConfig.variations.category = {value: category, disabled};
    this.defaultProductFormConfig.variations.color = {value: color, disabled};
  }

  private getProductFormControlsConfig(): FormGroup {
    const {general, inventory, shipping, variations} = this.defaultProductFormConfig;

    return this.fb.group({
      general: this.fb.group({
        name: [general.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(128)
        ]],
        regularPrice: [general.regularPrice, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        salePrice: [general.salePrice, [
          Validators.min(0.01),
          Validators.max(1_000_000)
        ]],
        description: [general.description, [
          Validators.required,
          Validators.minLength(3)
        ]]
      }),
      inventory: this.fb.group({
        stockQuantity: [inventory.stockQuantity, [
          Validators.required,
          Validators.min(0)
        ]],
        allowBackorders: [false]
      }),
      shipping: this.fb.group({
        weight: [shipping.weight, [
          Validators.required,
          Validators.min(0.00)
        ]],
        shippingMethod: [shipping.shippingMethod, [
          Validators.required
        ]]
      }),
      variations: this.fb.group({
        category: [variations.category, [
          Validators.maxLength(50),
          Validators.minLength(3)
        ]],
        color: [variations.color, [
          Validators.maxLength(50),
          Validators.minLength(3)
        ]]
      })
    });
  }

  private static createProductObjectToSend(general: AbstractControl,
                                           inventory: AbstractControl,
                                           variations: AbstractControl) {
    return {
      name: general.get('name')?.value,
      description: general.get('description')?.value,
      price: general.get('regularPrice')?.value,
      amount: inventory.get('stockQuantity')?.value,
      category: variations.get('category')?.value,
      color: variations.get('color')?.value
    };
  }

  private navigateToProductsManagePage(): void {
    this.router.navigate(['/admin/products-manage']);
  }
}
