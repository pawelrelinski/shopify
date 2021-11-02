import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

import {ProductResponse} from '@features/product/models';
import {Response} from '@core/interfaces';
import {ProductService} from '@features/product/services';
import {AttributesOfProduct} from '@features/product/components';


@Component({
  selector: 'shopify-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public products: Array<AttributesOfProduct> = [];
  public productCount!: number;

  constructor(private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setAllProducts();
    this.setProductsCount();
  }

  public trackByProductId(index: number, product: AttributesOfProduct): AttributesOfProduct['id'] {
    return product.id;
  }

  private setAllProducts(): void {
    this.productService.getAll()
      .pipe(take(1))
      .subscribe((products: Response<Array<ProductResponse>>) => {
        this.products = products.data.map((product: ProductResponse): AttributesOfProduct => {
          return {id: product.id, ...product.attributes} as AttributesOfProduct;
        });
      });
  }

  private setProductsCount(): void {
    this.productService.getMetadata()
      .pipe(take(1))
      .subscribe(data => {
        this.productCount = data.count;
      });
  }
}
