import { Component, OnInit } from '@angular/core';
import { ProductService } from '@features/product/services';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product, View } from '@features/product/models';

@Component({
  selector: 'shopify-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public views!: View[];

  private product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  public ngOnInit(): void {
    this.setProduct();
  }

  private setProduct(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          const id: number = params.productId;
          return this.productService.getById(id);
        })
      )
      .subscribe((product: Product) => {
        this.product = product;
        this.views = product.views;
      });
  }
}
