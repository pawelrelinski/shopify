import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersManageComponent } from './orders-manage.component';

const routes: Routes = [
	{
		path: '',
		component: OrdersManageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OrdersManageRoutingModule {}
