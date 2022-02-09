import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import { Category, GetAllCategories } from '@features/category/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Category[]> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http
      .get<GetAllCategories>(url)
      .pipe(map((value: GetAllCategories) => value.categories));
  }

  public getCount(): Observable<number> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('count');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<{ count: number }>(url).pipe(map((res: { count: number }) => res.count));
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('categories');
  }
}
