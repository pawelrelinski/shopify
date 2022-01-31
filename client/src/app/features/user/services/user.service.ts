import { Injectable } from '@angular/core';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetOneById, User } from '@features/user/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private segmentsUrl!: SegmentsUrl;
  private urlBuilder!: UrlBuilder;
  private queryStringParameters!: QueryStringParameters;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Array<User>> {
    this.setDefaultUrlConfig();
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<Array<User>>(url);
  }

  public getCount(): Observable<{ count: number }> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('count');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<{ count: number }>(url);
  }

  public updateOneAttribute(id: number, attributeName: string, attributeValue: string) {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push('attribute');
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
  }

  public getOneById(id: number): Observable<GetOneById['user']> {
    this.setDefaultUrlConfig();
    this.segmentsUrl.push(id.toString());
    const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
    return this.http.get<GetOneById>(url).pipe(map((user: GetOneById) => user.user));
  }

  private setDefaultUrlConfig(): void {
    this.segmentsUrl = new SegmentsUrl();
    this.urlBuilder = new UrlBuilder();
    this.queryStringParameters = new QueryStringParameters();
    this.segmentsUrl.push('users');
  }
}
