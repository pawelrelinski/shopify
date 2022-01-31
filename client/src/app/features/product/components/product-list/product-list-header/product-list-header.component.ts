import { Component } from '@angular/core';

@Component({
  selector: 'shopify-product-list-header',
  templateUrl: './product-list-header.component.html',
})
export class ProductListHeaderComponent {
  public dropDownMenuIsOpen = false;

  public toggleMenu(): void {
    this.dropDownMenuIsOpen = !this.dropDownMenuIsOpen;
  }

  public showMenu(): void {
    this.dropDownMenuIsOpen = true;
  }

  public hideMenu(): void {
    this.dropDownMenuIsOpen = false;
  }
}
