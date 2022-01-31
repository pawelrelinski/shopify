import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '@features/category/models';
import { CategoryService } from '@features/category/services';

@Component({
  selector: 'shopify-product-create-form-group-variations',
  templateUrl: './product-create-form-group-variations.component.html',
  styleUrls: ['./product-create-form-group-variations.component.scss'],
})
export class ProductCreateFormGroupVariationsComponent implements OnInit {
  @Output() onFormReady = new EventEmitter();

  public varationsForm!: FormGroup;
  public categories: Category[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

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
