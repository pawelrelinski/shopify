import { ShoppingCartItem } from '@features/shopping-cart/models';
import { createReducer, on } from '@ngrx/store';
import * as ShoppingCartItemActions from '@features/shopping-cart/store/actions/shopping-cart-item.actions';

export const initialState: Array<ShoppingCartItem> = [
  {
    id: 1,
    name: 'Product 1',
    price: 129,
    quantity: 1,
    refNumber: 'fa2143434',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 59,
    quantity: 2,
    refNumber: 'fb2143434',
  },
];

export const shoppingCartItemReducer = createReducer(
  initialState,
  on(ShoppingCartItemActions.add, (state, { shoppingCartItem }): Array<ShoppingCartItem> => {
    state.push(shoppingCartItem);
    return state;
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
