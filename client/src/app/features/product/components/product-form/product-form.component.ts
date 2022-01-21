import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '@features/product/services';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProductCreateDto, ProductCreateResponse } from '@features/product/models';
import { NotificationService } from '@features/notification/services';

interface ErrorResponse {
  ok: boolean;
  name: string;
  message: string;
}

@Component({
  selector: 'shopify-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public form!: FormGroup;
  public moreShippingMethodsOptionsIsShow = false;
  public readonly categories: Array<string> = [
    'solar-panels',
    'solar-inverters',
    'solar-batteries',
    'electric-car-charger',
    'mounting-system',
    'accessories',
  ];
  public readonly shippingMethods: Array<{ name: string; value: string }> = [
    { name: 'Collection in person', value: 'collection-in-person' },
    { name: 'InPost parcel', value: 'inpost-parcel' },
    { name: 'Courier consignment', value: 'courier-consignment' },
  ];
  public readonly editorConfig: AngularEditorConfig = {
    editable: true,
    minHeight: '100px',
    placeholder: 'Enter description here...',
  };

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  public ngOnInit(): void {
    this.setControlsForForm();
  }

  public onSubmit(): void {
    this.productService
      .create(this.createProductObjectToSend())
      .subscribe((res: ProductCreateResponse) => {
        this.handleSuccessResponse(res.status);
        this.notificationService.show({
          title: 'A new product has been successfully added',
          message: res.product.name,
        });
      });
  }

  public onCheckboxChange(event: any): void {
    const checkArray: FormArray = this.form.get('shipping')?.get('shippingMethods') as FormArray;

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

  public toggleShippingMethodsOptions(): void {
    this.moreShippingMethodsOptionsIsShow = !this.moreShippingMethodsOptionsIsShow;
  }

  public getGeneral(): AbstractControl | null {
    return this.form.get('general');
  }

  public getInventory(): AbstractControl | null {
    return this.form.get('inventory');
  }

  public getShipping(): AbstractControl | null {
    return this.form.get('shipping');
  }

  public getVariations(): AbstractControl | null {
    return this.form.get('variations');
  }

  private setControlsForForm(): void {
    this.form = this.fb.group({
      general: this.fb.group({
        name: this.fb.control('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
        regularPrice: this.fb.control(0.0, [
          Validators.required,
          Validators.min(0.01),
          Validators.max(1_000_000),
        ]),
        salePrice: this.fb.control(null, [Validators.min(0.0), Validators.max(1_000_000)]),
        shortDescription: this.fb.control('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ]),
        description: this.fb.control('', [Validators.required, Validators.minLength(5)]),
        producer: this.fb.control('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
        refNumber: this.fb.control('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ]),
      }),
      inventory: this.fb.group({
        stockQuantity: this.fb.control(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(1_000_000),
        ]),
      }),
      shipping: this.fb.group({
        expectedDeliveryTime: this.fb.control(0, [
          Validators.required,
          Validators.min(1),
          Validators.max(99),
        ]),
        shippingMethods: this.fb.array([], [Validators.required]),
      }),
      variations: this.fb.group({
        category: this.fb.control('', [Validators.required]),
      }),
      specification: this.fb.array([]),
    });
  }

  public getSpecification(): FormArray {
    return this.form.get('specification') as FormArray;
  }

  public newSpecification(): FormGroup {
    return this.fb.group({
      key: '',
      value: '',
    });
  }

  public addSpecification(): void {
    this.getSpecification().push(this.newSpecification());
  }

  public removeSpecification(index: number): void {
    this.getSpecification().removeAt(index);
  }

  public resetForm(): void {
    this.form.reset();
  }

  private createProductObjectToSend(): ProductCreateDto {
    return {
      name: this.getGeneral()?.get('name')?.value,
      shortDescription: this.getGeneral()?.get('shortDescription')?.value,
      description: this.getGeneral()?.get('description')?.value,
      defaultPrice: this.getGeneral()?.get('regularPrice')?.value,
      promotionPrice: this.getGeneral()?.get('salePrice')?.value
        ? this.getGeneral()?.get('salePrice')?.value
        : 0.0,
      category: this.getVariations()?.get('category')?.value,
      quantity: this.getInventory()?.get('stockQuantity')?.value,
      producer: this.getGeneral()?.get('producer')?.value,
      expectedDeliveryTime: this.getShipping()?.get('expectedDeliveryTime')?.value,
      refNumber: this.getGeneral()?.get('refNumber')?.value,
      dataSheet: JSON.stringify(this.getSpecification()?.value),
      shippingMethods: JSON.stringify(this.getShipping()?.get('shippingMethods')?.value),
    } as ProductCreateDto;
  }

  private handleSuccessResponse(code: number): void {
    const codes: Map<number, () => void> = new Map<number, () => void>()
      .set(200, () => this.navigateToProductsManagePage())
      .set(201, () => this.navigateToProductsManagePage())
      .set(204, () => this.navigateToProductsManagePage());

    const action: () => void = codes.get(code) as () => void;
    action();
  }

  private handleErrorResponse(error: ErrorResponse): void {
    const booleans: Map<boolean, () => object> = new Map<boolean, () => object>().set(false, () =>
      this.createSimpleErrorMessageObject(error)
    );

    const action: () => object = booleans.get(error.ok) as () => object;
    action();
  }

  private createSimpleErrorMessageObject(error: ErrorResponse): object {
    return {
      name: error.name,
      message: error.message,
    };
  }

  private navigateToProductsManagePage(): void {
    this.router.navigate(['/admin/products-manage']);
  }
}
