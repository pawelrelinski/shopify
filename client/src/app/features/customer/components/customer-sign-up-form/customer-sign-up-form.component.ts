import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services';
import { RegisterData, RegisterResponse } from '@core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'shopify-customer-sign-up-form',
  templateUrl: './customer-sign-up-form.component.html',
  styleUrls: ['./customer-sign-up-form.component.scss'],
})
export class CustomerSignUpFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.setForm();
  }

  public register(): void {
    const registerData: RegisterData = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.authService.register(registerData).subscribe((response: RegisterResponse) => {
      if (response.success) {
        this.router.navigate(['/sign-in']);
      }
    });
  }

  private setForm(): void {
    this.form = this.fb.group(
      {
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      },
      {
        validator: this.confirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  private confirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
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
