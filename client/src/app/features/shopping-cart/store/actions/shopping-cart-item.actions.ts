import { createAction, props } from '@ngrx/store';
import { ShoppingCartItemPropsRemove } from '@features/shopping-cart/models/shopping-cart-item-props-remove';
import { ShoppingCartItemPropsAdd } from '@features/shopping-cart/models/shopping-cart-item-props-add';

export const add = createAction('[Shopping Cart Component] Add', props<ShoppingCartItemPropsAdd>());
export const remove = createAction(
  '[Shopping Cart Component] Remove',
  props<ShoppingCartItemPropsRemove>()
);
