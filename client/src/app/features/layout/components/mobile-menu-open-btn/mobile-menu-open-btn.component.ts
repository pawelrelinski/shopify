import {Component} from '@angular/core';

import {MobileMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-mobile-menu-open-btn',
  templateUrl: './mobile-menu-open-btn.component.html'
})
export class MobileMenuOpenBtnComponent {
  constructor(private mobileMenuService: MobileMenuService) {
  }

  public openMobileMenu(): void {
    this.mobileMenuService.changeMenuState(true);
  }
}
