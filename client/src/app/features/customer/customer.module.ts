import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from '@features/customer/components';
import { RouterModule } from '@angular/router';
import { SignUpFormComponent } from '@features/customer/components';

@NgModule({
	declarations: [SignInFormComponent, SignUpFormComponent],
	imports: [CommonModule, RouterModule],
	exports: [SignInFormComponent, SignUpFormComponent],
})
export class CustomerModule {}
