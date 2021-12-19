import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StructureComponent } from '@features/layout/components';
import { BannerComponent } from '@features/layout/components';
import { MobileMenuComponent } from '@features/layout/components';
import { MoreFlyoutMenuComponent } from '@features/layout/components';
import { SolutionsFlyoutMenuComponent } from '@features/layout/components';
import { ProductsFlyoutMenuComponent } from '@features/layout/components';

@NgModule({
  declarations: [
    StructureComponent,
    BannerComponent,
    MobileMenuComponent,
    MoreFlyoutMenuComponent,
    SolutionsFlyoutMenuComponent,
    ProductsFlyoutMenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [StructureComponent],
})
export class LayoutModule {}
