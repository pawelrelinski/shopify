import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartState } from '@features/shopping-cart/models/shopping-cart-state';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '@features/shopping-cart/models';
import { remove } from '@features/shopping-cart/store/actions/shopping-cart-item.actions';
import { ShoppingCartItemPropsRemove } from '@features/shopping-cart/models/shopping-cart-item-props-remove';

@Component({
  selector: 'shopify-shopping-cart-item-list',
  templateUrl: './shopping-cart-item-list.component.html',
  styleUrls: ['./shopping-cart-item-list.component.scss'],
})
export class ShoppingCartItemListComponent {
  public shoppingCartItems!: Observable<Array<ShoppingCartItem>>;

  constructor(private store: Store<ShoppingCartState>) {
    this.shoppingCartItems = store.select('shoppingCartItems');
  }

  public deleteShoppingCardItem(id: string | number) {
    const props: ShoppingCartItemPropsRemove = { shoppingCartItemId: id };
    this.store.dispatch(remove(props));
  }
}
