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

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.setControlsForForm();
    console.log(this.getGeneral());
  }

  public onSubmit(): void {
    console.log(this.createProductObjectToSend());
    this.productService.create(this.createProductObjectToSend()).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['/admin/products-manage']);
      }
    });
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
        salePrice: this.fb.control(0.0, [Validators.min(0.01), Validators.max(1_000_000)]),
        description: this.fb.control('', [Validators.required, Validators.minLength(5)]),
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

  public resetForm(): void {
    this.form.reset();
  }

  private createProductObjectToSend() {
    return {
      name: this.getGeneral()?.get('name')?.value,
      description: this.getGeneral()?.get('description')?.value,
      price: this.getGeneral()?.get('regularPrice')?.value,
      amount: this.getInventory()?.get('stockQuantity')?.value,
      category: this.getVariations()?.get('category')?.value,
      properties: JSON.stringify(this.getSpecification()?.value),
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
