import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import {
  MatDialogCloseRemoveDialog,
  Product,
  ProductGetAllByResponse,
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
  private readonly defaultSortOptions: SortOptions = {
    by: 'id',
    method: 'asc',
  };

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.setAllProducts();
    this.setProductsCount();
  }

  public sortBy(sortOptions: SortOptions): void {
    this.setAllProducts(sortOptions);
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
        this.productService.delete(id).subscribe((res: { status: number; title: string }) => {
          if (res.status === 204) {
            this.setAllProducts();
            this.setProductsCount();
          }
        });
      }
    });
  }

  private setAllProducts(sortOptions: SortOptions = this.defaultSortOptions): void {
    this.productService
      .getAllBy(this.getQueryMap(sortOptions))
      .pipe(take(1))
      .subscribe((response: ProductGetAllByResponse) => {
        this.products = response.products;
        console.log(this.products);
      });
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
