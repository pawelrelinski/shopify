import {Component, OnInit} from '@angular/core';

import {ProductResponse} from '@features/product/models';
import {Response} from '@core/interfaces';
import {ProductService} from '@features/product/services';
import {AttributesOfProduct} from '@features/product/components';


@Component({
  selector: 'shopify-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrls: ['./products-list-table.component.scss']
})
export class ProductsListTableComponent implements OnInit {
  public products: Array<AttributesOfProduct> = [];

  constructor(private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setAllProducts();
  }

  private setAllProducts(): void {
    this.productService.getAll().subscribe((products: Response<Array<ProductResponse>>) => {
      this.products = products.data.map((product: ProductResponse): AttributesOfProduct => {
        return { id: product.id, ...product.attributes } as AttributesOfProduct;
      });
    });
  }
}
