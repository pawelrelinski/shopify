import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '@features/shopping-cart/components';
import { ShoppingCartItemListComponent } from '@features/shopping-cart/components';
import { ShoppingCartItemListElementComponent } from '@features/shopping-cart/components';
import { StoreModule } from '@ngrx/store';
import { shoppingCartItemReducer } from '@features/shopping-cart/store/reducers/shopping-cart-item.reducers';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ShoppingCartItemListComponent,
    ShoppingCartItemListElementComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      shoppingCartItems: shoppingCartItemReducer,
    }),
  ],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
