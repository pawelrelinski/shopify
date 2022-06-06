import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Category } from '@features/category/models';
import { CategoryService } from '@features/category/services';

@Component({
  selector: 'shopify-product-create-form-group-variations',
  templateUrl: './product-create-form-group-variations.component.html',
})
export class ProductCreateFormGroupVariationsComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public varationsForm!: UntypedFormGroup;
  public categories: Category[] = [];

  private categoryService = inject(CategoryService);

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.setCategories();
    this.setGeneralForm();
    this.onFormReady.emit(this.varationsForm);
  }

  private setCategories(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  private setGeneralForm(): void {
    this.varationsForm = this.fb.group({
      category: this.fb.control('', [Validators.required]),
    });
  }
}
