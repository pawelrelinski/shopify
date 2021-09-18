import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileMenuService {
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isOpen: Observable<boolean> = this._isOpen.asObservable();

  public changeMenuState(value: boolean): void {
    this._isOpen.next(value);
  }
}
