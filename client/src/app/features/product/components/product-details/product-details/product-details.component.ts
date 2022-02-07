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
  public viewsData!: { name: string; value: number }[];
  public isSuccessfulLoadedData = false;
  public colorSchema = { domain: ['#079669'] };

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
        this.setViews();
      });
  }

  private setViews(): void {
    const orderDates: Date[] = this.getOrderDates();
    const lastSevenDays: Date[] = this.getLastSevenDays();
    const newViewData: { name: string; value: number }[] = [];

    for (let i = 0; i < lastSevenDays.length; i++) {
      const name: string = this.getDayName(lastSevenDays[lastSevenDays.length - (i + 1)].getDay());
      newViewData.push({
        name,
        value: 0,
      });
    }

    this.viewsData = newViewData;
    this.isSuccessfulLoadedData = true;
  }

  private getOrderDates(): Date[] {
    return this.product.views
      .map((view: View) => view.createdAt)
      .sort((a: string, b: string) => Date.parse(b) - Date.parse(a))
      .map((date: string) => new Date(date));
  }

  private getLastSevenDays(): Date[] {
    return [...Array(7)].map((_, index: number) => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date;
    });
  }

  private getDayName(day: number): string {
    const daysNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysNames[day];
  }
}
