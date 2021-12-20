import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutStructureComponent } from '@features/layout/components';
import { LayoutBannerComponent } from '@features/layout/components';
import { LayoutMobileMenuComponent } from '@features/layout/components';
import { LayoutMoreFlyoutMenuComponent } from '@features/layout/components';
import { LayoutSolutionsFlyoutMenuComponent } from '@features/layout/components';
import { LayoutProductsFlyoutMenuComponent } from '@features/layout/components';

@NgModule({
  declarations: [
    LayoutStructureComponent,
    LayoutBannerComponent,
    LayoutMobileMenuComponent,
    LayoutMoreFlyoutMenuComponent,
    LayoutSolutionsFlyoutMenuComponent,
    LayoutProductsFlyoutMenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutStructureComponent],
})
export class LayoutModule {}
