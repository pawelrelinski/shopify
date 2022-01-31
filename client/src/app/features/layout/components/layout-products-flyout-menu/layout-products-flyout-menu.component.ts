import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlyoutMenu } from '@features/layout/models';
import { FlyoutMenuService } from '@features/layout/services';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from '@features/category/services';
import { Category } from '@features/category/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'shopify-layout-products-flyout-menu',
  templateUrl: './layout-products-flyout-menu.component.html',
  styleUrls: ['./layout-products-flyout-menu.component.scss'],
})
export class LayoutProductsFlyoutMenuComponent implements OnInit, OnDestroy {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;

  public categories: Category[] = [];

  private readonly destroyed = new Subject<boolean>();

  constructor(
    private flyoutMenuService: FlyoutMenuService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
    this.setCategories();
  }

  public ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  public toggleFlyoutMenu(): void {
    if (this.showFlyoutMenu) {
      this.showFlyoutMenu = false;
    } else {
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.PRODUCTS);
      this.checkFlyoutMenuName();
    }
  }

  private updateFlyoutMenuName(): void {
    this.flyoutMenuService.flyoutMenu
      .pipe(takeUntil(this.destroyed))
      .subscribe((flyoutMenuName: FlyoutMenu) => {
        this.flyoutMenuName = flyoutMenuName;
        this.checkFlyoutMenuName();
      });
  }

  private checkFlyoutMenuName(): void {
    this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.PRODUCTS;
  }

  private setCategories(): void {
    this.categoryService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
      this.setTrustedHTMLIcons();
    });
  }

  private setTrustedHTMLIcons() {
    for (const category of this.categories) {
      category.heroIconAsSvg = this.sanitizer.bypassSecurityTrustHtml(
        category.heroIconAsSvg as string
      );
    }
  }
}
