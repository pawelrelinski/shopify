import { Component } from "@angular/core";

@Component({
  selector: "shopify-order-card-list-element",
  templateUrl: "./order-card-list-element.component.html",
})
export class OrderCardListElementComponent {
  public productsListIsVisible = false;

  public toggleProductsList(): void {
    this.productsListIsVisible = !this.productsListIsVisible;
  }
}
