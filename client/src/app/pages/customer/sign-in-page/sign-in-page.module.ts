import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInPageComponent } from './sign-in-page.component';
import { UserModule } from '@features/user/user.module';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [CommonModule, SignInPageRoutingModule, UserModule],
})
export class SignInPageModule {}
