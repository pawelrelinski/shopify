import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { SignUpPageComponent } from './sign-up-page.component';
import { UserModule } from '@features/user/user.module';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [CommonModule, SignUpPageRoutingModule, UserModule],
})
export class SignUpPageModule {}
