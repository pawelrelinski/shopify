import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';

const routes: Routes = [
	{
		path: '',
		component: ShoppingCartPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShoppingCartPageRoutingModule {}
