import {Component} from '@angular/core';

import {MobileMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-mobile-menu-close-btn',
  templateUrl: './mobile-menu-close-btn.component.html'
})
export class MobileMenuCloseBtnComponent {
  constructor(private mobileMenuService: MobileMenuService) {
  }

  public closeMobileMenu(): void {
    this.mobileMenuService.changeMenuState(false);
  }
}
