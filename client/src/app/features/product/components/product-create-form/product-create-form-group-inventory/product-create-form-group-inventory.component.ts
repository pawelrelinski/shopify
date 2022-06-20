import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopify-product-create-form-group-inventory',
  templateUrl: './product-create-form-group-inventory.component.html',
})
export class ProductCreateFormGroupInventoryComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public inventoryForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.setInventoryForm();
    this.onFormReady.emit(this.inventoryForm);
  }

  private setInventoryForm(): void {
    this.inventoryForm = this.fb.group({
      stockQuantity: this.fb.control(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(1_000_000),
      ]),
    });
  }
}
