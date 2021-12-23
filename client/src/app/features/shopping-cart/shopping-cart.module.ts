import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '@features/shopping-cart/components';
import { ShoppingCartProductListComponent } from '@features/shopping-cart/components';
import { ShoppingCartProductListElementComponent } from '@features/shopping-cart/components';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartProductListComponent,
    ShoppingCartProductListElementComponent,
  ],
  imports: [CommonModule],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
