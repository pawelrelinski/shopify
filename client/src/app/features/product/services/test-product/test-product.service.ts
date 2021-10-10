import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {allProducts} from '@features/product/services/test-product/products';
import {Response} from '@core/interfaces';
import {ProductResponse} from '@features/product/models';

@Injectable({
  providedIn: 'root'
})
export class TestProductService {
  public getAll(): Observable<Response<Array<ProductResponse>>> {
    return of(allProducts);
  }
}
