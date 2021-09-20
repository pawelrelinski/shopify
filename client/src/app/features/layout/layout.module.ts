import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StructureComponent} from './components/structrure/structure.component';
import {MobileMenuComponent} from '@features/layout/components/mobile-menu/mobile-menu.component';
import {MobileMenuOpenBtnComponent} from './components/mobile-menu-open-btn/mobile-menu-open-btn.component';
import {MobileMenuCloseBtnComponent} from './components/mobile-menu-close-btn/mobile-menu-close-btn.component';
import {MenFlyoutMenuComponent} from './components/men-flyout-menu/men-flyout-menu.component';
import {WomenFlyoutMenuComponent} from '@features/layout/components/women-flyout-menu/women-flyout-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import {RouterModule} from "@angular/router";


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
export class LayoutModule { }
