import { Component } from "@angular/core";

@Component({
  selector: "shopify-user-profile-orders-active-element",
  templateUrl: "./user-profile-orders-active-element.component.html",
})
export class UserProfileOrdersActiveElementComponent {
  public productsListIsVisible = false;

  public toggleProductsList(): void {
    this.productsListIsVisible = !this.productsListIsVisible;
  }
}
