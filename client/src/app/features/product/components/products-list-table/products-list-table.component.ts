import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';

import {ProductResponse, ProductSimple} from '@features/product/models';
import {TestProductService} from '@features/product/services';
import {Response} from '@core/interfaces';


@Component({
  selector: 'shopify-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrls: ['./products-list-table.component.scss']
})
export class ProductsListTableComponent implements OnInit {
  public products: Array<ProductSimple> = [];

  constructor(private testProductService: TestProductService) {
  }

  public ngOnInit(): void {
    this.setAllProducts();
  }

  private setAllProducts(): void {
    this.testProductService.getAll().pipe(
      map(((value: Response<Array<ProductResponse>>) => this.mappingArrayOfProductResponseToProductSimple(value)))
    ).subscribe((products: Array<ProductSimple>) => {
      this.products = products;
    });
  }

  private mappingArrayOfProductResponseToProductSimple(value: Response<Array<ProductResponse>>): Array<ProductSimple> {
    return value.data.map((product: ProductResponse) => {
      return  { id: product.id, ...product.attributes } as ProductSimple;
    });
  }
}
