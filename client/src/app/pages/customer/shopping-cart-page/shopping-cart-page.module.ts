import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartPageRoutingModule } from './shopping-cart-page-routing.module';
import { ShoppingCartPageComponent } from './shopping-cart-page.component';

@NgModule({
	declarations: [ShoppingCartPageComponent],
	imports: [CommonModule, ShoppingCartPageRoutingModule],
})
export class ShoppingCartPageModule {}
