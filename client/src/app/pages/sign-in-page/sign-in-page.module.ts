import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInPageComponent } from './sign-in-page.component';


@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SignInPageRoutingModule
  ]
})
export class SignInPageModule { }
