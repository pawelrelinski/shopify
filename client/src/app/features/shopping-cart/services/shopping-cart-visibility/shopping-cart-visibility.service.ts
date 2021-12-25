import { Injectable } from '@angular/core';
import { ShoppingCartVisiblity } from '@features/shopping-cart/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartVisibilityService {
  private _isVisibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public readonly isVisibility: Observable<boolean> = this._isVisibility.asObservable();

  public changeShoppingCartVisibility(value: boolean): void {
    this._isVisibility.next(value);
  }
}
