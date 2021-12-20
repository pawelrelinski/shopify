import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListTableComponent } from '@features/order/components';
import { OrderListTableRowComponent } from '@features/order/components';

@NgModule({
  declarations: [OrderListTableComponent, OrderListTableRowComponent],
  imports: [CommonModule],
  exports: [OrderListTableComponent],
})
export class OrderModule {}
