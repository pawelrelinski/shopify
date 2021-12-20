import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from '@features/layout/services';

@Component({
  selector: 'shopify-layout-mobile-menu',
  templateUrl: './layout-mobile-menu.component.html',
  styleUrls: ['./layout-mobile-menu.component.scss'],
})
export class LayoutMobileMenuComponent implements OnInit {
  constructor(private mobileMenuService: MobileMenuService) {}

  public ngOnInit(): void {
    this.mobileMenuService.changeMenuState(false);
  }

  public close(): void {
    this.mobileMenuService.changeMenuState(false);
  }
}
