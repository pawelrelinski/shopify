import { Component, OnInit } from '@angular/core';
import { ProductService } from '@features/product/services';
import { ProductWithViewsCount } from '@features/product/models';

@Component({
  selector: 'shopify-product-most-popular',
  templateUrl: './product-most-popular.component.html',
  styleUrls: ['./product-most-popular.component.scss'],
})
export class ProductMostPopularComponent implements OnInit {
  public products!: any[];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.setProducts();
  }

  private setProducts(): void {
    this.productService.getMostViewedProducts().subscribe((products: ProductWithViewsCount[]) => {
      this.products = products.map((product: ProductWithViewsCount) => {
        return {
          name: product.productName,
          value: product.productViews,
        };
      });
    });
  }
}
