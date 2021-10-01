import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StructureComponent} from '@features/layout/components';
import {MobileMenuComponent} from '@features/layout/components';
import {MobileMenuOpenBtnComponent} from '@features/layout/components';
import {MobileMenuCloseBtnComponent} from '@features/layout/components';
import {MenFlyoutMenuComponent} from '@features/layout/components';
import {WomenFlyoutMenuComponent} from '@features/layout/components';
import {BannerComponent} from '@features/layout/components';


@NgModule({
  declarations: [
    StructureComponent,
    MobileMenuComponent,
    MobileMenuOpenBtnComponent,
    MobileMenuCloseBtnComponent,
    MenFlyoutMenuComponent,
    WomenFlyoutMenuComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StructureComponent
  ]
})
export class LayoutModule {
}
