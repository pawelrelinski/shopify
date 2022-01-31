import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shopify-product-create-form-group-specification',
  templateUrl: './product-create-form-group-specification.component.html',
  styleUrls: ['./product-create-form-group-specification.component.scss'],
})
export class ProductCreateFormGroupSpecificationComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public specificationForm!: FormArray;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.setSpecificationForm();
    this.onFormReady.emit(this.specificationForm);
  }

  public newSpecification(): FormGroup {
    return this.fb.group({
      key: '',
      value: '',
    });
  }

  public addSpecification(): void {
    this.specificationForm.push(this.newSpecification());
  }

  public removeSpecification(index: number): void {
    this.specificationForm.removeAt(index);
  }

  private setSpecificationForm(): void {
    this.specificationForm = this.fb.array([]);
  }
}
