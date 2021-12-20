import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { ProductResponse } from '@features/product/models';
import { Response } from '@core/interfaces';
import { ProductService } from '@features/product/services';
import { AttributesOfProduct, SortOptions } from '@features/product/components';

@Component({
  selector: 'shopify-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  public products: Array<AttributesOfProduct> = [];
  public productCount!: number;
  public pageCount!: number;
  public currentPage: number = 1;

  private queryParams!: Map<string, string>;
  private readonly defaultSortOptions: SortOptions = {
    by: 'id',
    method: 'asc',
  };

  constructor(private productService: ProductService) {}

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

  public changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.setAllProducts();
  }

  public getIndexForTableRow(value: number): number {
    return this.currentPage > 1 ? value + (this.currentPage - 1) * 10 : value;
  }

  private setAllProducts(sortOptions: SortOptions = this.defaultSortOptions): void {
    this.productService
      .getAllBy(this.getQueryMap(sortOptions))
      .pipe(take(1))
      .subscribe((products: Response<Array<ProductResponse>>) => {
        this.products = products.data.map(this.getProductsAttributes);
      });
  }

  private getProductsAttributes(product: ProductResponse): AttributesOfProduct {
    return { id: product.id, ...product.attributes } as AttributesOfProduct;
  }

  private setProductsCount(): void {
    const options = new Map<string, string>();

    this.productService
      .getMetadata(options)
      .pipe(take(1))
      .subscribe((data) => {
        this.productCount = data.count;
        this.setPaginationPageCount();
      });
  }

  private getQueryMap(sortOptions: SortOptions): Map<string, string> {
    this.queryParams = new Map<string, string>()
      .set('sortBy', sortOptions.by)
      .set('sortMethod', sortOptions.method)
      .set('limit', '10')
      .set('offset', (this.currentPage - 1).toString());

    return this.queryParams;
  }

  private setPaginationPageCount(): void {
    this.pageCount = +(this.productCount / 10).toFixed(0);
    this.productCount % 10 > 0 ? (this.pageCount += 1) : null;
  }
}
