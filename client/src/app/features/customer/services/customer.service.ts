import { Injectable } from '@angular/core';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '@features/customer/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<Customer>> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<Array<Customer>>(url);
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('users');
  }
}
