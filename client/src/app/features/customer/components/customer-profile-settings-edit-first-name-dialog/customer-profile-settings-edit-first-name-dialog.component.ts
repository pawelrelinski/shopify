import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopify-customer-profile-settings-edit-first-name-dialog',
  templateUrl: './customer-profile-settings-edit-first-name-dialog.component.html',
  styleUrls: ['./customer-profile-settings-edit-first-name-dialog.component.scss'],
})
export class CustomerProfileSettingsEditFirstNameDialogComponent implements OnInit {
  public userInfoForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CustomerProfileSettingsEditFirstNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.userInfoForm = this.fb.group({
      firstName: [
        this.data.firstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      ],
      lastName: [
        this.data.lastName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      ],
      email: [this.data.email, [Validators.required, Validators.email]],
      password: [
        this.data.password,
        [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
      ],
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
