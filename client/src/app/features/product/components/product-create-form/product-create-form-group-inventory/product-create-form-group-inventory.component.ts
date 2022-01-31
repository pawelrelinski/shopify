import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopify-product-create-form-group-inventory',
  templateUrl: './product-create-form-group-inventory.component.html',
  styleUrls: ['./product-create-form-group-inventory.component.scss'],
})
export class ProductCreateFormGroupInventoryComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public inventoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
