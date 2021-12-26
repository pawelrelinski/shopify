import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartState } from '@features/shopping-cart/models/shopping-cart-state';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '@features/shopping-cart/models';

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
}
