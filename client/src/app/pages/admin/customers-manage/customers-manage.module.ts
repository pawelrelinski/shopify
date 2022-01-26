import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersManageRoutingModule } from './customers-manage-routing.module';
import { CustomerModule } from '@features/customer/customer.module';
import { CustomersManageComponent } from './customers-manage.component';

@NgModule({
  declarations: [CustomersManageComponent],
  imports: [CommonModule, CustomersManageRoutingModule, CustomerModule],
})
export class CustomersManageModule {}
