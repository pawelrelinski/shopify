import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '@features/product/services';
import { switchMap } from 'rxjs';
import { Product, ProductGetAllByResponse, SortOptions } from '@features/product/models';

@Component({
  selector: 'shopify-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> = [];
  public categoryName!: string;
  public productCount!: number;
  public pageCount!: number;
  public currentPage: number = 1;

  private queryParams!: Map<string, string>;
  private readonly defaultSortOptions: SortOptions = {
    by: 'id',
    method: 'asc',
  };

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          this.categoryName = params.category;
          return this.productService.getAllBy(this.getQueryMap(this.defaultSortOptions));
        })
      )
      .subscribe((response: ProductGetAllByResponse) => {
        this.products = response.products;
      });
  }

  private getQueryMap(sortOptions: SortOptions): Map<string, string> {
    this.queryParams = new Map<string, string>()
      .set('sortBy', sortOptions.by)
      .set('sortMethod', sortOptions.method)
      .set('limit', '10')
      .set('offset', (this.currentPage - 1).toString())
      .set('category', this.categoryName);

    return this.queryParams;
  }
}
