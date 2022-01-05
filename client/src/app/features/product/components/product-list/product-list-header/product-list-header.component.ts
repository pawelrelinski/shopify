import { Component } from '@angular/core';

@Component({
  selector: 'shopify-product-list-header',
  templateUrl: './product-list-header.component.html',
})
export class ProductListHeaderComponent {
  public dropDownMenuIsOpen = false;

  public toggleDropDownMenu(): void {
    this.dropDownMenuIsOpen = !this.dropDownMenuIsOpen;
  }
}
