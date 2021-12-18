import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInPageComponent } from './sign-in-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
	declarations: [SignInPageComponent],
	imports: [CommonModule, SignInPageRoutingModule, CustomerModule],
})
export class SignInPageModule {}
