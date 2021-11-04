import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, retry, take} from 'rxjs/operators';

import {Product, ProductResponse} from '@features/product/models';
import {ProductService} from '@features/product/services';
import {Response} from '@core/interfaces';

interface ProductUrlData {
  category: string | null;
  productType: string | null;
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

  private currentRoute!: string;
  private queryParams!: Map<string, string>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.getDataFromUrl();
  }

  public isProducts(): boolean {
    return !!(this.products);
  }

  private getDataFromUrl(): void {
    this.router.events.pipe(
      filter((routerEvent: any) => routerEvent instanceof NavigationEnd),
      map((routerEvent: NavigationEnd) => routerEvent.url)
    ).subscribe((routerEvent: string) => {
      this.currentRoute = routerEvent;
      this.productsMetaData = this.getProductsInfoFromUrl();
      this.setAllProducts();
      this.setPathToProductArray();
    });
  }

  private setAllProducts(): void {
    this.productService.getAllBy(this.getQueryMap()).pipe(
      retry(3),
      take(1)
    ).subscribe((res: Response<Array<ProductResponse>>) => {
      const productResponses = res.data as Array<ProductResponse>;

      this.products = productResponses.map((val: ProductResponse) => {
        const {name, description, amount, price} = val.attributes;
        return new Product(val.id as number, name, description, amount, price);
      });
    });
  }

  private getProductsInfoFromUrl(): ProductUrlData {
    this.cutOffFirstPartOfCurrentRoute();
    const urlParts: Array<string> = this.getSeparatedUrlParts();

    return {
      category: urlParts[1],
      productType: urlParts[2]
    };
  }

  private cutOffFirstPartOfCurrentRoute(): void {
    const urlPartToCutOff: string = '/products';
    if (this.currentRoute.startsWith(urlPartToCutOff)) {
      this.currentRoute = this.currentRoute.slice(urlPartToCutOff.length, this.currentRoute.length - 1);
    }
  }

  private getSeparatedUrlParts(): Array<string> {
    return this.currentRoute.split('/');
  }

  private setPathToProductArray(): void {
    this.pathToProducts.push(this.productsMetaData.category as string);
    this.pathToProducts.push(this.productsMetaData.productType as string);
  }

  private getQueryMap(): Map<string, string> {
    this.queryParams = new Map<string, string>()
      .set('category', 'men')
      .set('sortBy', 'id')
      .set('sortMethod', 'asc')
      .set('limit', '100')
      .set('offset', '0');

    return this.queryParams;
  }
}
