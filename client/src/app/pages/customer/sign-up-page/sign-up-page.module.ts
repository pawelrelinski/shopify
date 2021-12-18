import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { SignUpPageComponent } from './sign-up-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
	declarations: [SignUpPageComponent],
	imports: [CommonModule, SignUpPageRoutingModule, CustomerModule],
})
export class SignUpPageModule {}
