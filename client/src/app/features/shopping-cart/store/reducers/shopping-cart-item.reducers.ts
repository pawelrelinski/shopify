import { ShoppingCartItem } from '@features/shopping-cart/models';
import { createReducer, on } from '@ngrx/store';
import * as ShoppingCartItemActions from '@features/shopping-cart/store/actions/shopping-cart-item.actions';

export const initialState: Array<ShoppingCartItem> = [];

export const shoppingCartItemReducer = createReducer(
  initialState,
  on(ShoppingCartItemActions.add, (state, { shoppingCartItem }): Array<ShoppingCartItem> => {
    const copyOfState = [...state];
    copyOfState.push(shoppingCartItem);
    return copyOfState;
  }),
  on(ShoppingCartItemActions.remove, (state, { shoppingCartItemId }): Array<ShoppingCartItem> => {
    const copyOfState = [...state];
    const itemIndex: number = copyOfState.findIndex(
      (item: ShoppingCartItem) => item.id == (shoppingCartItemId as number)
    );
    copyOfState.splice(itemIndex, 1);
    return copyOfState;
  })
);
