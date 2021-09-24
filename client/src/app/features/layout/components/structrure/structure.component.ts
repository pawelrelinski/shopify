import {Component, OnInit} from '@angular/core';

import {BannerService, MobileMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './structure.component.html'
})
export class StructureComponent implements OnInit {
  public mobileMenuIsOpen!: boolean;
  public bannerIsOpen!: boolean;

  constructor(private mobileMenuService: MobileMenuService,
              private bannerService: BannerService) {
  }

  public ngOnInit(): void {
    this.updateMobileMenuState();
    this.updateBannerState();
  }

  public closeBanner(): void {
    this.bannerService.closeBanner();
  }

  private updateMobileMenuState(): void {
    this.mobileMenuService.isOpen.subscribe((state: boolean) => {
      this.mobileMenuIsOpen = state;
    });
  }

  private updateBannerState(): void {
    this.bannerService.isOpen.subscribe((state: boolean) => {
      this.bannerIsOpen = state;
    });
  }
}
