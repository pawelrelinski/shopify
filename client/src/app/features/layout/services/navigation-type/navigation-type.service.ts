import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationType } from '@features/layout/models';

@Injectable({
  providedIn: 'root',
})
export class NavigationTypeService {
  private _navigationType: BehaviorSubject<NavigationType> = new BehaviorSubject<NavigationType>(
    NavigationType.USER
  );
  public readonly navigationType: Observable<NavigationType> = this._navigationType.asObservable();

  public changeNavigationType(value: NavigationType): void {
    this._navigationType.next(value);
  }
}
