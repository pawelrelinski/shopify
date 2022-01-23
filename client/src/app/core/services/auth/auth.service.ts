import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginResponse, RegisterData, RegisterResponse } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import * as moment from 'moment';

enum AuthLocalStorageItem {
  ACCESS_TOKEN = 'accessToken',
  EXPIRES_IN = 'expiresIn',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public register(registerData: RegisterData): Observable<RegisterResponse> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('register');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
    return this.http.post<RegisterResponse>(url, registerData);
  }

  public login(loginData: LoginData): Observable<LoginResponse> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('login');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
    return this.http.post<LoginResponse>(url, loginData);
  }

  public logout(): void {
    localStorage.removeItem(AuthLocalStorageItem.ACCESS_TOKEN);
    localStorage.removeItem(AuthLocalStorageItem.EXPIRES_IN);

    this._isLoggedIn.next(false);
  }

  public isLoggedIn(): Observable<boolean> {
    const nextValue: boolean = !!localStorage.getItem(AuthLocalStorageItem.ACCESS_TOKEN);
    this._isLoggedIn.next(nextValue);
    return this._isLoggedIn;
  }

  public isLoggedOut(): Observable<boolean> {
    const nextValue: boolean = !!localStorage.getItem(AuthLocalStorageItem.ACCESS_TOKEN);
    this._isLoggedIn.next(nextValue);
    return this._isLoggedIn;
  }

  public getExpiration(): moment.Moment {
    const expiration = localStorage.getItem(AuthLocalStorageItem.EXPIRES_IN) as string;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public setSession(authResult: LoginResponse): void {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem(AuthLocalStorageItem.ACCESS_TOKEN, authResult.accessToken);
    localStorage.setItem(AuthLocalStorageItem.EXPIRES_IN, JSON.stringify(expiresAt.valueOf()));

    this._isLoggedIn.next(true);
  }

  private isBeforeExpiration(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('auth');
  }
}
