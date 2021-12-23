import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FlyoutMenu } from '@features/layout/models';

@Injectable({
  providedIn: 'root',
})
export class FlyoutMenuService {
  private _flyoutMenu: BehaviorSubject<FlyoutMenu> = new BehaviorSubject<FlyoutMenu>(
    FlyoutMenu.NONE
  );
  public readonly flyoutMenu: Observable<FlyoutMenu> = this._flyoutMenu.asObservable();

  public changeFlyoutMenuState(value: FlyoutMenu): void {
    this._flyoutMenu.next(value);
  }
}
