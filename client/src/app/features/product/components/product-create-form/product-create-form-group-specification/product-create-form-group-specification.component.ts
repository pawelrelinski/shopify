import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'shopify-product-create-form-group-specification',
  templateUrl: './product-create-form-group-specification.component.html',
})
export class ProductCreateFormGroupSpecificationComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public specificationForm!: UntypedFormArray;

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.setSpecificationForm();
    this.onFormReady.emit(this.specificationForm);
  }

  public newSpecification(): UntypedFormGroup {
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
