import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ShoppingCartComponent,
  ShoppingCartItemListComponent,
  ShoppingCartItemListElementComponent,
} from '@features/shopping-cart/components';
import { StoreModule } from '@ngrx/store';
import { shoppingCartItemReducer } from '@features/shopping-cart/store/reducers/shopping-cart-item.reducers';
import { PipesModule } from '@core/pipes/pipes.module';
import { RouterModule } from '@angular/router';

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
    PipesModule,
    RouterModule,
  ],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
