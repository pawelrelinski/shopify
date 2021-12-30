import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  OrderCardListComponent,
  OrderCardListElementComponent,
  OrderListTableComponent,
  OrderListTableRowComponent,
} from '@features/order/components';

@NgModule({
  declarations: [
    OrderListTableComponent,
    OrderListTableRowComponent,
    OrderCardListComponent,
    OrderCardListElementComponent,
  ],
  imports: [CommonModule],
  exports: [OrderListTableComponent, OrderCardListComponent],
})
export class OrderModule {}
