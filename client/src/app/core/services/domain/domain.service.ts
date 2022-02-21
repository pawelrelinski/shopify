import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  constructor(private http: HttpClient) {}

  public enterToPage(): Observable<Object> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.post(url, {});
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('domain');
  }
}
