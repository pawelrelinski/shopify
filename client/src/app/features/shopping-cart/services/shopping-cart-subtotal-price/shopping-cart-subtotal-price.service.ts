import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartItem, ShoppingCartState } from '@features/shopping-cart/models';
import { map, Observable } from 'rxjs';

interface ItemPriceData {
  price: number;
  quantity: number;
}

interface TotalPrice {
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartSubtotalPriceService {
  private shoppingCartItems!: Observable<Array<ShoppingCartItem>>;

  constructor(private store: Store<ShoppingCartState>) {
    this.shoppingCartItems = store.select('shoppingCartItems');
  }

  public get(): Observable<number> {
    return this.shoppingCartItems.pipe(
      map((items: ShoppingCartItem[]): ItemPriceData[] => {
        return items.map((item: ShoppingCartItem) => {
          return {
            price: item.price,
            quantity: item.quantity,
          };
        });
      }),
      map((items: ItemPriceData[]): number[] =>
        items.map((item: ItemPriceData) => {
          return item.price * item.quantity;
        })
      ),
      map((values: number[]) => {
        let totalPrice = 0;
        values.forEach((val: number) => {
          totalPrice += val;
        });
        return totalPrice;
      })
    );
  }
}
