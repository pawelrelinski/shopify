import { Injectable } from '@angular/core';
import { ShoppingCartVisiblity } from '@features/shopping-cart/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartVisibilityService {
  private _isVisibility: BehaviorSubject<ShoppingCartVisiblity> =
    new BehaviorSubject<ShoppingCartVisiblity>(ShoppingCartVisiblity.HIDDEN);

  public readonly isVisibility: Observable<ShoppingCartVisiblity> =
    this._isVisibility.asObservable();

  public changeShoppingCartVisibility(value: ShoppingCartVisiblity): void {
    this._isVisibility.next(value);
  }
}
