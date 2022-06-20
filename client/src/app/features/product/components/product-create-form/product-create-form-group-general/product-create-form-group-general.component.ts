import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

interface ImageSnippet {
  src: string;
  file: File;
}

@Component({
  selector: 'shopify-product-create-form-group-general',
  templateUrl: './product-create-form-group-general.component.html',
})
export class ProductCreateFormGroupGeneralComponent implements OnInit {
  @Output() onFormReady = new EventEmitter<UntypedFormGroup>();

  public generalForm!: UntypedFormGroup;
  public selectedFile!: ImageSnippet;
  public readonly editorConfig: AngularEditorConfig = {
    editable: true,
    minHeight: '100px',
    placeholder: 'Enter description here...',
  };

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.setGeneralForm();
    this.onFormReady.emit(this.generalForm);
  }

  public processFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = {
        src: event.target.result,
        file: file,
      } as ImageSnippet;
      this.generalForm.get('image')?.setValue(this.selectedFile.file);
    });

    reader.readAsDataURL(file);
  }

  private setGeneralForm(): void {
    this.generalForm = this.fb.group({
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
      image: this.fb.control(null, [Validators.required]),
    });
  }
}
