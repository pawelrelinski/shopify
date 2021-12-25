import { ShoppingCartItem } from '@features/shopping-cart/models';
import { createReducer, on } from '@ngrx/store';
import * as ShoppingCartItemActions from '@features/shopping-cart/store/actions/shopping-cart-item.actions';

export const initialState: Array<ShoppingCartItem> = [];

const _shoppingCartItemReducer = createReducer(
  initialState,
  on(ShoppingCartItemActions.add, (state, { shoppingCartItem }): Array<ShoppingCartItem> => {
    state.push(shoppingCartItem);
    return state;
  }),
  on(ShoppingCartItemActions.remove, (state, { shoppingCartItemId }): Array<ShoppingCartItem> => {
    const itemIndex: number = state.findIndex(
      (item: ShoppingCartItem) => item.id === shoppingCartItemId
    );
    state.splice(itemIndex, 1);
    return state;
  })
);

export function shoppingCartItemReducer(state: Array<ShoppingCartItem>, action: any) {
  return _shoppingCartItemReducer(state, action);
}
