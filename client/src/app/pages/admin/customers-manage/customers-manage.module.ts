import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersManageRoutingModule } from './customers-manage-routing.module';
import { UserModule } from '@features/user/user.module';
import { CustomersManageComponent } from './customers-manage.component';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [CustomersManageComponent],
  imports: [CommonModule, CustomersManageRoutingModule, UserModule, ShopifyButtonsModule],
})
export class CustomersManageModule {}
