import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

enum BANNER_VISIBILITY {
  visible = '1',
  hidden = '0'
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private readonly LOCAL_STORAGE_KEY: string = 'shopify_banner_is_open';
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLocalStorageKeyValue());

  public readonly isOpen: Observable<boolean> = this._isOpen.asObservable();

  public closeBanner(): void {
    this._isOpen.next(false);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, BANNER_VISIBILITY.hidden);
  }

  private getLocalStorageKeyValue(): boolean {
    if (!localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, BANNER_VISIBILITY.visible);
      return true;
    } else {
      const localStorageValue: BANNER_VISIBILITY = localStorage.getItem(this.LOCAL_STORAGE_KEY) as BANNER_VISIBILITY;
      return !localStorageValue;
    }
  }
}
