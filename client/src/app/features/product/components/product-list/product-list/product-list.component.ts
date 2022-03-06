import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '@features/product/services';
import { Observable, switchMap } from 'rxjs';
import { Product, SortAction, SortOptions } from '@features/product/models';
import { CategoryService } from '@features/category/services';
import { Category } from '@features/category/models';

@Component({
  selector: 'shopify-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public categoryFormatName!: string;
  public category$!: Observable<Category>;
  public categories$!: Observable<Category[]>;

  public pageRules = {
    products: {
      count: 0,
      range: { from: 0, to: 0 },
    },
    page: { current: 1, count: 0 },
  };

  public productsListIsEmpty = false;
  public isAllProducts = false;
  public isLoading = true;
  public isError = false;

  private queryParams = new Map<string, string>();
  private sortOptions: SortOptions = {
    by: 'id',
    method: 'ASC',
    take: 10,
    skip: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  public ngOnInit(): void {
    this.getProducts();
  }

  public sortProducts(sort: SortAction): void {
    this.sortOptions.by = sort.name;
    this.sortOptions.method = sort.method;

    this.getProducts();
  }

  public changePage(pageNumber: number): void {
    this.pageRules.page.current = pageNumber;
    this.getProducts();
  }

  private getQueryMap(sortOptions: SortOptions = this.sortOptions): Map<string, string> {
    this.queryParams
      .set('sortBy', sortOptions.by)
      .set('sortMethod', sortOptions.method)
      .set('limit', sortOptions.take + '')
      .set('offset', (this.pageRules.page.current - 1).toString());

    if (this.categoryFormatName) {
      this.queryParams.set('category', this.categoryFormatName);
    }

    return this.queryParams;
  }

  private getProducts(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          this.categoryFormatName = params.category;
          if (!this.categoryFormatName) {
            this.isAllProducts = true;
          } else {
            this.category$ = this.categoryService.getByFormatName(this.categoryFormatName);
          }
          this.categories$ = this.categoryService.getAll();
          return this.productService.getAllBy(this.getQueryMap());
        })
      )
      .subscribe(
        ({ products, productsCountInCategory }) => {
          this.products = products;
          this.pageRules.products.count = productsCountInCategory;
          this.setPageCount();
          this.productsListIsEmpty = this.products.length <= 0;

          this.setProductsRange();
          this.isLoading = false;
        },
        (error: any) => {
          if (error) {
            this.isLoading = false;
            this.isError = true;
          }
        }
      );
  }

  private setPageCount(): void {
    if (this.pageRules.products.count > 10) {
      this.pageRules.page.count = +(this.pageRules.products.count / 10).toFixed(0);
    } else {
      this.pageRules.page.count = 1;
    }
  }

  private setProductsRange(): void {
    if (this.pageRules.page.current === 1) {
      this.pageRules.products.range.from = 1;
      this.pageRules.products.range.to =
        this.pageRules.products.count > 10 ? 10 : this.pageRules.products.count;
    } else {
      this.pageRules.products.range.from = (this.pageRules.page.current - 1) * 10 + 1;
      this.pageRules.products.range.to =
        this.pageRules.page.current === this.pageRules.page.count
          ? this.pageRules.products.count
          : (this.pageRules.page.current - 1) * 10 + 10;
    }
  }
}
