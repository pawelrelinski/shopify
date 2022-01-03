import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { ProductFormMode } from '@features/product/models';

interface ErrorResponse {
  ok: boolean;
  name: string;
  message: string;
}

@Component({
  selector: 'shopify-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductFormComponent),
      multi: true,
    },
  ],
})
export class ProductFormComponent implements OnInit {
  @Input()
  public formMode!: ProductFormMode;

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

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.setControlsForForm();
  }

  public onSubmit(): void {
    console.log(this.form);
  }

  public onCheckboxChange(event: any) {
    const checkArray: FormArray = this.form.get('shipping')?.get('shippingMethods') as FormArray;

    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  public toggleShippingMethodsOptions(): void {
    this.moreShippingMethodsOptionsIsShow = !this.moreShippingMethodsOptionsIsShow;
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
        salePrice: this.fb.control(0.0, [Validators.min(0.01), Validators.max(1_000_000)]),
        description: this.fb.control('', [Validators.required, Validators.maxLength(3)]),
      }),
      inventory: this.fb.group({
        stockQuantity: this.fb.control(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(1_000_000),
        ]),
        allowBackorders: this.fb.control(false),
      }),
      shipping: this.fb.group({
        weight: this.fb.control(0.0, [Validators.required, Validators.min(0.01)]),
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

  private static createProductObjectToSend(
    general: AbstractControl,
    inventory: AbstractControl,
    variations: AbstractControl
  ) {
    return {
      name: general.get('name')?.value,
      description: general.get('description')?.value,
      price: general.get('regularPrice')?.value,
      amount: inventory.get('stockQuantity')?.value,
      category: variations.get('category')?.value,
      color: variations.get('color')?.value,
    };
  }

  private handleSuccessResponse(code: number): void {
    const codes: Map<number, () => void> = new Map<number, () => void>()
      .set(200, () => this.navigateToProductsManagePage())
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
