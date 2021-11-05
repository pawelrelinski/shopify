import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

import {ProductResponse} from '@features/product/models';
import {Response} from '@core/interfaces';
import {ProductService} from '@features/product/services';
import {AttributesOfProduct, SortOptions} from '@features/product/components';


@Component({
  selector: 'shopify-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  public products: Array<AttributesOfProduct> = [];
  public productCount!: number;

  public paginationPageCount!: number;
  public paginationCurrentPage: number = 1;

  private queryParams!: Map<string, string>;

  constructor(private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setAllProducts();
    this.setProductsCount();
  }

  public sortBy(sortOptions: SortOptions): void {
    this.setAllProducts(sortOptions);
  }

  public trackByProductId(index: number, product: AttributesOfProduct): AttributesOfProduct['id'] {
    return product.id;
  }

  private setAllProducts(sortOptions: SortOptions = { by: 'id', method: 'asc' }): void {
    this.productService.getAllBy(this.getQueryMap(sortOptions))
      .pipe(take(1))
      .subscribe((products: Response<Array<ProductResponse>>) => {
        this.products = products.data.map((product: ProductResponse): AttributesOfProduct => {
          return {id: product.id, ...product.attributes} as AttributesOfProduct;
        });
      });
  }

  private setProductsCount(): void {
    const options = new Map<string, string>();

    this.productService.getMetadata(options)
      .pipe(take(1))
      .subscribe(data => {
        this.productCount = data.count;
        this.setPaginationPageCount();
      });
  }

  private getQueryMap(sortOptions: SortOptions): Map<string, string> {
    this.queryParams = new Map<string, string>()
      .set('sortBy', sortOptions.by)
      .set('sortMethod', sortOptions.method)
      .set('limit', '10')
      .set('offset', (this.paginationCurrentPage - 1).toString());

    return this.queryParams;
  }

  private setPaginationPageCount(): void {
    this.paginationPageCount = +((this.productCount / 10).toFixed(0));
    if (this.productCount % 10 > 0) {
      this.paginationPageCount += 1;
    }
    console.log(this.paginationPageCount);
  }
}
