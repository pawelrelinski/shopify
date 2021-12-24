import { ShoppingCartItem } from '@features/shopping-cart/models/shopping-cart-item';

export interface ShoppingCartState {
  readonly shoppingCartItem: Array<ShoppingCartItem>;
}
