import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services';
import { LoginData, LoginResponse } from '@core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'shopify-customer-sign-in-form',
  templateUrl: './customer-sign-in-form.component.html',
  styleUrls: ['./customer-sign-in-form.component.scss'],
})
export class CustomerSignInFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  public ngOnInit(): void {
    this.setForm();
  }

  public login(): void {
    const loginData: LoginData = {
      password: this.form.get('password')?.value,
      email: this.form.get('email')?.value,
    };
    this.authService.login(loginData).subscribe((response: LoginResponse) => {
      if (response.accessToken) {
        this.authService.setSession(response);
        // this.router.navigate(['/profile']);
      }
    });
  }

  private setForm(): void {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    });
  }
}
