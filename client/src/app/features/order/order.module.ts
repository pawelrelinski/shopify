import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  OrderCardListComponent,
  OrderCardListElementComponent,
  OrderListTableComponent,
  OrderListTableRowComponent,
  OrderWidgetComponent,
} from '@features/order/components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderListTableComponent,
    OrderListTableRowComponent,
    OrderCardListComponent,
    OrderCardListElementComponent,
    OrderWidgetComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [OrderListTableComponent, OrderCardListComponent, OrderWidgetComponent],
})
export class OrderModule {}
