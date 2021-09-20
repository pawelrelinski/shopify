import {Component, OnInit} from '@angular/core';

import {MobileMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './structure.component.html'
})
export class StructureComponent implements OnInit {
  public mobileMenuIsOpen!: boolean;
  public bannerIsOpen = true;

  constructor(private mobileMenuService: MobileMenuService) {
  }

  public ngOnInit(): void {
    this.updateMobileMenuState();
  }

  public closeBanner(): void {
    this.bannerIsOpen = false;
  }

  private updateMobileMenuState(): void {
    this.mobileMenuService.isOpen.subscribe((state: boolean) => {
      this.mobileMenuIsOpen = state;
    });
  }
}
