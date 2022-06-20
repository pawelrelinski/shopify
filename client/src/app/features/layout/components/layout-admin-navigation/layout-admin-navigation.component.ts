import { Component } from '@angular/core';

@Component({
  selector: 'shopify-layout-admin-navigation',
  templateUrl: './layout-admin-navigation.component.html',
})
export class LayoutAdminNavigationComponent {
  public sidebarIsOpen = false;

  public productsFlyoutIsOpen = false;
  public categoriesFlyoutIsOpen = false;
  public usersFlyoutIsOpen = false;
  public ordersFlyoutIsOpen = false;

  public closeSidebar(): void {
    this.sidebarIsOpen = false;
  }

  public openSidebar(): void {
    this.sidebarIsOpen = true;
  }

  public toggleProductsFlyout(): void {
    this.productsFlyoutIsOpen = !this.productsFlyoutIsOpen;
  }

  public toggleCategoriesFlyout(): void {
    this.categoriesFlyoutIsOpen = !this.categoriesFlyoutIsOpen;
  }

  public toggleUsersFlyout(): void {
    this.usersFlyoutIsOpen = !this.usersFlyoutIsOpen;
  }

  public toggleOrdersFlyout(): void {
    this.ordersFlyoutIsOpen = !this.ordersFlyoutIsOpen;
  }
}
