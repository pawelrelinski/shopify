import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersListTableComponent } from '@features/order/components';
import { OrdersListTableRowComponent } from '@features/order/components';

@NgModule({
	declarations: [OrdersListTableComponent, OrdersListTableRowComponent],
	imports: [CommonModule],
	exports: [OrdersListTableComponent],
})
export class OrderModule {}
