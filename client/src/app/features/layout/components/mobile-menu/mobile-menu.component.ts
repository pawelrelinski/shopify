import {Component} from '@angular/core';


@Component({
  selector: 'shopify-mobile-menu',
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent {
  public menMenuIsOpen = false;
  public womenMenuIsOpen = true;

  public openWomenMenu(): void {
    if (!this.womenMenuIsOpen) {
      this.womenMenuIsOpen = true;
      this.menMenuIsOpen = false;
    }
  }

  public openMenMenu(): void {
    if (!this.menMenuIsOpen) {
      this.menMenuIsOpen = true;
      this.womenMenuIsOpen = false;
    }
  }
}
