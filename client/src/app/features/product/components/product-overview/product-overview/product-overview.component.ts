import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '@features/product/services';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@features/product/models';
import { Store } from '@ngrx/store';
import { ShoppingCartState } from '@features/shopping-cart/models';
import { add } from '@features/shopping-cart/store/actions/shopping-cart-item.actions';
import { ShoppingCartItemPropsAdd } from '@features/shopping-cart/models/shopping-cart-item-props-add';
import { switchMap } from 'rxjs';
import { EmitItemData } from '@features/product/components/product-overview/product-overview-header/product-overview-header.component';
import { NotificationDirective } from '@core/directives/notification/notification.directive';
import { NotificationComponent } from '@shared/shopify-notifications/components/notification/notification.component';

@Component({
  selector: 'shopify-product-overview',
  templateUrl: './product-overview.component.html',
})
export class ProductOverviewComponent implements OnInit {
  public product!: Product;

  @ViewChild(NotificationDirective, { static: true }) notificationHost!: NotificationDirective;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<ShoppingCartState>
  ) {}

  public ngOnInit(): void {
    this.getProduct();
  }

  public addItemToShoppingCart(event: EmitItemData): void {
    const shoppingCartItem: ShoppingCartItemPropsAdd = {
      shoppingCartItem: {
        id: this.product.id,
        name: this.product.name,
        price: this.product.defaultPrice as number,
        category: this.product.category,
        quantity: event.quantity,
      },
    };
    this.store.dispatch(add(shoppingCartItem));
    this.loadNotificationComponent(this.product.name, event.quantity);
  }

  private getProduct(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          const id: number = params.productId;
          return this.productService.getById(id);
        })
      )
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

  private loadNotificationComponent(productName: string, quantity: number): void {
    const productWord = quantity === 1 ? 'product' : 'products';
    const viewContainerRef = this.notificationHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<NotificationComponent>(NotificationComponent);
    componentRef.instance.data = {
      title: `Add ${quantity} ${productWord} to basket`,
      message: productName,
    };
  }
}
