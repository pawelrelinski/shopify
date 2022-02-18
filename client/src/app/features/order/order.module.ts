import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  OrderCardListComponent,
  OrderCardListElementComponent,
  OrderListTableComponent,
  OrderListTableRowComponent,
} from '@features/order/components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OrderListTableComponent,
    OrderListTableRowComponent,
    OrderCardListComponent,
    OrderCardListElementComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [OrderListTableComponent, OrderCardListComponent],
})
export class OrderModule {}
