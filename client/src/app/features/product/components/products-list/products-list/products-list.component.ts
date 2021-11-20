import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, retry, take} from 'rxjs/operators';

import {Product, ProductResponse} from '@features/product/models';
import {ProductService} from '@features/product/services';
import {Response} from '@core/interfaces';
import {AttributesOfProduct} from "@features/product/components";

interface ProductUrlData {
  category: string;
  productType: string;
}

@Component({
  selector: 'shopify-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: Array<Product> = [];
  public productsMetaData!: ProductUrlData;
  public pathToProducts: Array<string> = [];

  public productCount!: number;
  public pageCount!: number;
  public currentPage: number = 1;

  private currentRoute!: string;
  private queryParams!: Map<string, string>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.setData();
  }

  public isProducts(): boolean {
    return (this.products.length !== 0);
  }

  public trackByProductId(index: number, product: Product): Product['id'] {
    return product.id;
  }

  public changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.setData();
  }

  public refresh(): void {
    this.ngOnInit();
  }

  private setData(): void {
    this.router.events.pipe(
      filter((routerEvent: any) => routerEvent instanceof NavigationEnd),
      map((routerEvent: NavigationEnd) => routerEvent.url)
    ).subscribe((routerEvent: string) => {
      this.currentRoute = routerEvent;
      this.productsMetaData = this.getProductsInfoFromUrl();
      this.setAllProducts();
      this.setPathToProductArray();
      this.setProductsCount();
    });
  }

  private setProductsCount(): void {
    const category: string = this.getSeparatedUrlParts().get('category') as string;
    const productsType: string = this.getSeparatedUrlParts().get('productsType') as string;
    const options = new Map<string, string>()
      .set('category', category)
      .set('productsType', productsType);

    this.productService.getMetadata(options)
      .pipe(take(1))
      .subscribe(data => {
        console.log(data);
        this.productCount = data.count;
        this.setPaginationPageCount();
      });
  }

  private setPaginationPageCount(): void {
    this.pageCount = +((this.productCount / 10).toFixed(0));
    (this.productCount % 10 > 0) ? this.pageCount += 1 : null;
  }

  private setAllProducts(): void {
    this.productService.getAllBy(this.getQueryMap()).pipe(
      retry(3),
      take(1)
    ).subscribe((response: Response<Array<ProductResponse>> | any) => {
      if (+response.status === 404) {
        this.isProducts();
      } else {
        const productResponses = response.data as Array<ProductResponse>;
        this.products = productResponses.map(this.createProductObject);
      }
    });
  }

  private createProductObject(value: ProductResponse): Product {
    const {name, description, amount, price} = value.attributes;
    return new Product(value.id as number, name, description, amount, price);
  }

  private getProductsInfoFromUrl(): ProductUrlData {
    this.cutOffFirstPartOfCurrentRoute();
    const urlParts: Map<string, string> = this.getSeparatedUrlParts();

    return {
      category: urlParts.get('category') as string,
      productType: urlParts.get('productType') as string
    };
  }

  private cutOffFirstPartOfCurrentRoute(): void {
    const urlPartToCutOff: string = '/products';
    const lengthOfUrlPartToCutOff = urlPartToCutOff.length;
    const lengthOfCurrentRoute = this.currentRoute.length;
    const startWith = this.currentRoute.startsWith(urlPartToCutOff);

    this.currentRoute = startWith ? this.currentRoute.slice(lengthOfUrlPartToCutOff, lengthOfCurrentRoute) : '';
  }

  private getSeparatedUrlParts(): Map<string, string> {
    const urlParts = this.currentRoute.split('/');
    return  new Map<string, string>()
      .set('category', urlParts[1])
      .set('productType', urlParts[2]);
  }

  private setPathToProductArray(): void {
    this.pathToProducts.push(this.productsMetaData.category as string);
    this.pathToProducts.push(this.productsMetaData.productType as string);
  }

  private getQueryMap(): Map<string, string> {
    this.setPathToProductArray();
    this.queryParams = new Map<string, string>()
      .set('category', this.productsMetaData.category)
      .set('productsType', this.productsMetaData.productType)
      .set('sortBy', 'id')
      .set('sortMethod', 'asc')
      .set('limit', '10')
      .set('offset', (this.currentPage - 1).toString());

    return this.queryParams;
  }
}
