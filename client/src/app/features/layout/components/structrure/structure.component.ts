import {Component, OnInit} from '@angular/core';

import {MobileMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  public mobileMenuIsOpen!: boolean;

  constructor(private mobileMenuService: MobileMenuService) {
  }

  public ngOnInit(): void {
    this.updateMobileMenuState();
  }

  private updateMobileMenuState(): void {
    this.mobileMenuService.isOpen.subscribe((state: boolean) => {
      this.mobileMenuIsOpen = state;
    });
  }
}
