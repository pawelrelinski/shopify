import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

enum BannerVisibility {
  VISIBLE = '1',
  HIDDEN = '0',
}

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private readonly LOCAL_STORAGE_KEY: string = 'shopify_banner_is_open';
  private _isOpen = new BehaviorSubject<boolean>(this.getLocalStorageKeyValue());

  public readonly isOpen: Observable<boolean> = this._isOpen.asObservable();

  public closeBanner(): void {
    this._isOpen.next(false);
    localStorage.setItem(this.LOCAL_STORAGE_KEY, BannerVisibility.HIDDEN);
  }

  private getLocalStorageKeyValue(): boolean {
    if (!localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, BannerVisibility.VISIBLE);
      return true;
    } else {
      const localStorageValue: BannerVisibility = localStorage.getItem(
        this.LOCAL_STORAGE_KEY
      ) as BannerVisibility;
      return !localStorageValue;
    }
  }
}
