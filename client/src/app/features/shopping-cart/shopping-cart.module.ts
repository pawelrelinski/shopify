import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '@features/shopping-cart/components';
import { ShoppingCartProductListComponent } from '@features/shopping-cart/components';
import { ShoppingCartProductListElementComponent } from '@features/shopping-cart/components';
import { StoreModule } from '@ngrx/store';
import { shoppingCartItemReducer } from '@features/shopping-cart/store/reducers/shopping-cart-item.reducers';

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
