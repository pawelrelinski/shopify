import { Component } from '@angular/core';
import { UserModule } from '@features/user/user.module';

@Component({
  selector: 'shopify-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  standalone: true,
  imports: [UserModule],
})
export class SignUpPageComponent {}
