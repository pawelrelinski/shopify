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

  public getById(id: number): Observable<ProductResponse> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push(id.toString());
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<ProductResponse>(url);
  }

  public create(product: any): Observable<{ status: number; title: string; }> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl) + '/';
    return this.http.post<{ status: number; title: string; }>(url, product);
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.segmentsUrl.push('products');
  }
}
