import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public readonly isOpen: Observable<boolean> = this._isOpen.asObservable();

  public closeBanner(): void {
    this._isOpen.next(false);
  }
}
