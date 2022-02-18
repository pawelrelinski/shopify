import { Component, OnInit } from '@angular/core';
import { ProductService } from '@features/product/services';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@features/product/models';
import { Store } from '@ngrx/store';
import { ShoppingCartState } from '@features/shopping-cart/models';
import { add } from '@features/shopping-cart/store/actions/shopping-cart-item.actions';
import { ShoppingCartItemPropsAdd } from '@features/shopping-cart/models/shopping-cart-item-props-add';
import { switchMap } from 'rxjs';
import { EmitItemData } from '@features/product/components/product-overview/product-overview-header/product-overview-header.component';
import { NotificationService } from '@features/notification/services';

@Component({
  selector: 'shopify-product-overview',
  templateUrl: './product-overview.component.html',
})
export class ProductOverviewComponent implements OnInit {
  public product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<ShoppingCartState>,
    private notificationService: NotificationService
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
        image: this.product.image,
      },
    };
    this.store.dispatch(add(shoppingCartItem));
    this.notificationService.show({
      title: 'Add item to basket',
      message: this.product.name,
    });
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
}
