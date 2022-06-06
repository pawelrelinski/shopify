import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services';
import { RegisterData, RegisterResponse } from '@core/models';
import { Router } from '@angular/router';
import { NotificationService } from '@features/notification/services';
import { NotificationType } from '@features/notification/models';

@Component({
  selector: 'shopify-user-sign-up-form',
  templateUrl: './user-sign-up-form.component.html',
  styleUrls: ['./user-sign-up-form.component.scss'],
})
export class UserSignUpFormComponent implements OnInit {
  public form!: UntypedFormGroup;
  public isError = false;
  public errors: string[] = [];

  constructor(private fb: UntypedFormBuilder, private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.setForm();
  }

  public register(): void {
    const registerData: RegisterData = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
    };
    this.authService.register(registerData).subscribe(
      (response: RegisterResponse) => {
        if (response.success) {
          this.router.navigate(['/sign-in']);
        }
        this.isError = false;
      },
      (error) => {
        this.isError = true;
        this.errors = error.error.message;
        console.log(error);
      }
    );
  }

  private setForm(): void {
    this.form = this.fb.group(
      {
        email: this.fb.control('', [Validators.required, Validators.email]),
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      },
      {
        validator: this.confirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  private confirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: UntypedFormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmPasswordValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
