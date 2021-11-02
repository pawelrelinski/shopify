import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Response} from '@core/interfaces';
import {ProductResponse} from '@features/product/models';
import {SegmentsUrl, UrlBuilder} from '@core/utils';

type ArrayOfProducts = Response<Array<ProductResponse>>;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<ArrayOfProducts> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<ArrayOfProducts>(url);
  }

  public getById(id: number): Observable<Response<ProductResponse>> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push(id.toString());
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<Response<ProductResponse>>(url);
  }

  public create(product: any): Observable<{ status: number; title: string; }> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl) + '/';
    return this.http.post<{ status: number; title: string; }>(url, product);
  }

  public delete(id: number): Observable<{ status: number; title: string; }> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push(id.toString());
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.delete<{ status: number; title: string; }>(url);
  }

  public getMetadata(): Observable<any> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('data');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get(url);
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.segmentsUrl.push('products');
  }
}
