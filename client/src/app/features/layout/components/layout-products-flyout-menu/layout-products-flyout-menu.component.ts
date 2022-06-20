import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlyoutMenu } from '@features/layout/models';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '@features/category/models';
import { LayoutProductsFlyoutMenuInjectors } from '@features/layout/components/layout-products-flyout-menu/layout-products-flyout-menu-injectors';

@Component({
  selector: 'shopify-layout-products-flyout-menu',
  templateUrl: './layout-products-flyout-menu.component.html',
})
export class LayoutProductsFlyoutMenuComponent
  extends LayoutProductsFlyoutMenuInjectors
  implements OnInit, OnDestroy
{
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;
  public categories: Category[] = [];

  private readonly destroyed = new Subject<boolean>();

  constructor() {
    super();
  }

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
