import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManageRoutingModule } from './orders-manage-routing.module';
import { OrdersManageComponent } from './orders-manage.component';
import { OrderModule } from '@features/order/order.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [OrdersManageComponent],
  imports: [CommonModule, OrdersManageRoutingModule, OrderModule, ShopifyButtonsModule],
})
export class OrdersManageModule {}
