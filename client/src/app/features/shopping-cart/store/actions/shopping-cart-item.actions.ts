import { createAction, props } from '@ngrx/store';
import { ShoppingCartItem } from '@features/shopping-cart/models';

export const add = createAction(
  '[Shopping Cart Component] Add',
  props<{ shoppingCartItem: ShoppingCartItem }>()
);
export const remove = createAction(
  '[Shopping Cart Component ] Remove',
  props<{ shoppingCartItemId: ShoppingCartItem['id'] }>()
);
