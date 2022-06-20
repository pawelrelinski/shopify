import { FlyoutMenuService } from '@features/layout/services';
import { CategoryService } from '@features/category/services';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core';

export abstract class LayoutProductsFlyoutMenuInjectors {
  protected readonly flyoutMenuService = inject(FlyoutMenuService);
  protected readonly categoryService = inject(CategoryService);
  protected readonly sanitizer = inject(DomSanitizer);
}
