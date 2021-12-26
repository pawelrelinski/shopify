import { Injectable } from '@angular/core';
import { LoginData } from '@core/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

export type ReturnedLoginData = LoginData | null;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly localStorageUserKey = 'currentUser';
  private _currentUser!: BehaviorSubject<ReturnedLoginData>;

  constructor() {
    this._currentUser = new BehaviorSubject<ReturnedLoginData>(
      this.getUserDataOrNullFromLocalStorage()
    );
  }

  public currentUser: Observable<ReturnedLoginData> = this._currentUser.asObservable();

  public login({ email, password }: LoginData): ReturnedLoginData {
    if (email === 'test@gmail.com' && password === 'test') {
      this._currentUser.next({ email, password });
      localStorage.setItem(this.localStorageUserKey, JSON.stringify({ email, password }));
      return { email, password } as LoginData;
    }
    return null;
  }

  public logout(): void {
    localStorage.removeItem(this.localStorageUserKey);
    this._currentUser.next(null);
  }

  private getUserDataOrNullFromLocalStorage(): ReturnedLoginData {
    const localStorageItem = localStorage.getItem(this.localStorageUserKey);
    if (localStorageItem === null) {
      return null;
    }
    return JSON.parse(localStorageItem);
  }
}
