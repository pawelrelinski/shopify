import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartItem, ShoppingCartState } from '@features/shopping-cart/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartSubtotalPriceService {
  private shoppingCartItems!: Observable<Array<ShoppingCartItem>>;

  constructor(private store: Store<ShoppingCartState>) {
    this.shoppingCartItems = store.select('shoppingCartItems');
  }

  public get(): Observable<Array<number>> {
    return this.shoppingCartItems.pipe(
      map((items) => {
        return items.map((item) => {
          return {
            price: item.price,
            quantity: item.quantity,
          };
        });
      }),
      map((items) =>
        items.map((item) => {
          return item.price * item.quantity;
        })
      )
    );
  }
}
