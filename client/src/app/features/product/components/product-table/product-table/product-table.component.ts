import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import {
  MatDialogCloseRemoveDialog,
  Product,
  ProductDeleteResponse,
  ProductGetAllByResponse,
  SortAction,
  SortOptions,
} from '@features/product/models';
import { ProductService } from '@features/product/services';
import { MatDialog } from '@angular/material/dialog';
import { ProductTableRemoveDialogComponent } from '@features/product/components/product-table/product-table-remove-dialog/product-table-remove-dialog.component';

@Component({
  selector: 'shopify-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  public products: Array<Product> = [];
  public productCount!: number;
  public pageCount!: number;
  public currentPage: number = 1;

  private queryParams!: Map<string, string>;
  private sortOptions: SortOptions = {
    by: 'id',
    method: 'ASC',
    take: 10,
    skip: 0,
  };

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.setAllProducts();
    this.setProductsCount();
  }

  public sortProducts(sort: SortAction): void {
    this.sortOptions.by = sort.name;
    this.sortOptions.method = sort.method;

    this.setAllProducts();
  }

  public trackByProductId(index: number, product: Product): Product['id'] {
    return product.id;
  }

  public changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.setAllProducts();
  }

  public getIndexForTableRow(value: number): number {
    return this.currentPage > 1 ? value + (this.currentPage - 1) * 10 : value;
  }

  public deleteProduct(id: number): void {
    const dialogRef = this.dialog.open(ProductTableRemoveDialogComponent);

    dialogRef.afterClosed().subscribe((result: MatDialogCloseRemoveDialog) => {
      if (result === MatDialogCloseRemoveDialog.DELETE) {
        this.productService.delete(id).subscribe((res: ProductDeleteResponse) => {
          switch (res.status) {
            case 204:
              this.setAllProducts();
              this.setProductsCount();
              break;
            case 404:
              console.log('dupa dupa');
              break;
          }
        });
      }
    });
  }

  private setAllProducts(sortOptions: SortOptions = this.sortOptions): void {
    this.productService
      .getAllBy(this.getQueryMap(sortOptions))
      .subscribe((response: ProductGetAllByResponse) => {
        this.products = response.products;
      });
  }

  private setProductsCount(): void {
    const options = new Map<string, string>();

    this.productService
      .getCount(options)
      .pipe(take(1))
      .subscribe(({ count }) => {
        this.productCount = count;
        this.setPaginationPageCount();
      });
  }

  private getQueryMap(sortOptions: SortOptions = this.sortOptions): Map<string, string> {
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
