import { Component, OnInit } from '@angular/core';
import { ProductService } from '@features/product/services';
import { ActivatedRoute } from '@angular/router';
import { ProductResponse } from '@features/product/models';
import { AttributesOfProduct, EmitItemData } from '@features/product/components';
import { Store } from '@ngrx/store';
import { ShoppingCartState } from '@features/shopping-cart/models';
import { add } from '@features/shopping-cart/store/actions/shopping-cart-item.actions';
import { ShoppingCartItemPropsAdd } from '@features/shopping-cart/models/shopping-cart-item-props-add';

@Component({
  selector: 'shopify-product-overview',
  templateUrl: './product-overview.component.html',
})
export class ProductOverviewComponent implements OnInit {
  public product!: AttributesOfProduct;

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
    console.log(shoppingCartItem);
  }

  private getProduct(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params.productId;
      this.productService.getById(id).subscribe((product: any) => {
        this.product = this.getProductsAttributes(product.data);
      });
    });
  }

  private getProductsAttributes(product: ProductResponse): AttributesOfProduct {
    return { id: product.id, ...product.attributes } as AttributesOfProduct;
  }
}
