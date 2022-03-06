import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import { Category, CategoryWithProductsCount, GetAllCategories } from '@features/category/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  private userRolesHeaderKey = 'User-Roles';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Category[]> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http
      .get<GetAllCategories>(url)
      .pipe(map((value: GetAllCategories) => value.categories));
  }

  public getByFormatName(category: string): Observable<Category> {
    this.setDefaultUrlConfig();
    this.queryStringParameters.push('formatName', category);
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
    return this.http.get<{ categories: Category[] }>(url).pipe(
      map(({ categories }) => {
        return categories[0];
      })
    );
  }

  public getAllWithViewsCount(): Observable<(Category & { viewsCount: number })[]> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('views');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);

    const headers = new HttpHeaders().append(this.userRolesHeaderKey, 'admin');
    const requestOptions = { headers };

    return this.http.get<(Category & { viewsCount: number })[]>(url, requestOptions);
  }

  public getCount(): Observable<number> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('metrics');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);

    const headers = new HttpHeaders().append(this.userRolesHeaderKey, 'admin');
    const requestOptions = { headers };

    return this.http
      .get<{ count: number }>(url, requestOptions)
      .pipe(map((res: { count: number }) => res.count));
  }

  public getAllWithProductCount(): Observable<CategoryWithProductsCount[]> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('productsCount');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);

    const headers = new HttpHeaders().append(this.userRolesHeaderKey, 'admin');
    const requestOptions = { headers };

    return this.http.get<CategoryWithProductsCount[]>(url, requestOptions);
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('categories');
  }
}
