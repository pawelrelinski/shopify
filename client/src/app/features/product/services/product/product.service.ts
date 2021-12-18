import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Response } from '@core/interfaces';
import { ProductResponse } from '@features/product/models';
import { QueryStringParameters, SegmentsUrl, UrlBuilder } from '@core/utils';

type ArrayOfProducts = Response<Array<ProductResponse>>;
type ErrorResponse = {
	msg: string;
	code: number | null;
};

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private segmentsUrl!: SegmentsUrl;
	private urlBuilder!: UrlBuilder;
	private queryStringParameters!: QueryStringParameters;

	constructor(private http: HttpClient) {}

	public getAll(): Observable<ArrayOfProducts> {
		this.setDefaultUrlConfig();
		const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
		return this.http.get<ArrayOfProducts>(url);
	}

	public getAllBy(queryParams: Map<string, string>): Observable<ArrayOfProducts> {
		this.setDefaultUrlConfig();
		for (const [key, value] of queryParams) {
			this.queryStringParameters.push(key, value);
		}

		const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
		return this.http.get<ArrayOfProducts>(url);
		//   .pipe(
		//   catchError(error => {
		//     const errorResponse: ErrorResponse = { msg: '', code: null };
		//     if (error.error instanceof ErrorEvent) {
		//       errorResponse.msg = `Error: ${error.error.message}`;
		//       errorResponse.code = error.status;
		//     } else {
		//       errorResponse.msg = this.getServerErrorMessage(error);
		//     }
		//
		//     return throwError(errorResponse);
		//   })
		// );
	}

	public getById(id: number): Observable<Response<ProductResponse>> {
		this.setDefaultUrlConfig();
		this.segmentsUrl.push(id.toString());
		const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
		return this.http.get<Response<ProductResponse>>(url);
	}

	public create(product: any): Observable<{ status: number; title: string }> {
		this.setDefaultUrlConfig();
		const url: string = this.urlBuilder.getUrl(this.segmentsUrl) + '/';
		return this.http.post<{ status: number; title: string }>(url, product);
	}

	public delete(id: number): Observable<{ status: number; title: string }> {
		this.setDefaultUrlConfig();
		this.segmentsUrl.push(id.toString());
		const url: string = this.urlBuilder.getUrl(this.segmentsUrl);
		return this.http.delete<{ status: number; title: string }>(url);
	}

	public getMetadata(options: Map<string, string>): Observable<{ count: number }> {
		this.setDefaultUrlConfig();
		this.segmentsUrl.push('data');

		if (options.has('productsType')) {
			this.queryStringParameters.push('category', options.get('category'));
			this.queryStringParameters.push('productsType', options.get('productsType'));
			const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
			console.log(url);
			return this.http.get<{ count: number }>(url);
		}

		if (options.has('category')) {
			this.queryStringParameters.push('category', options.get('category'));
			const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
			return this.http.get<{ count: number }>(url);
		}

		const url: string = this.urlBuilder.getUrl(this.segmentsUrl, this.queryStringParameters);
		return this.http.get<{ count: number }>(url);
	}

	private setDefaultUrlConfig(): void {
		this.segmentsUrl = new SegmentsUrl();
		this.urlBuilder = new UrlBuilder();
		this.queryStringParameters = new QueryStringParameters();
		this.segmentsUrl.push('products');
	}

	private getServerErrorMessage(error: HttpErrorResponse): string {
		switch (error.status) {
			case 404: {
				return `Not Found: ${error.message}`;
			}
			case 403: {
				return `Access Denied: ${error.message}`;
			}
			case 500: {
				return `Internal Server Error: ${error.message}`;
			}
			default: {
				return `Unknown Server Error: ${error.message}`;
			}
		}
	}
}
