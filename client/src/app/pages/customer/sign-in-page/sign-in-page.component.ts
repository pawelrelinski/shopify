import { Component } from '@angular/core';
import { UserModule } from '@features/user/user.module';

@Component({
  selector: 'shopify-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  standalone: true,
  imports: [UserModule],
})
export class SignInPageComponent {}
