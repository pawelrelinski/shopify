import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignInFormComponent } from '@features/customer/components';
import { RouterModule } from '@angular/router';
import { CustomerSignUpFormComponent } from '@features/customer/components';

@NgModule({
  declarations: [CustomerSignInFormComponent, CustomerSignUpFormComponent],
  imports: [CommonModule, RouterModule],
  exports: [CustomerSignInFormComponent, CustomerSignUpFormComponent],
})
export class CustomerModule {}
