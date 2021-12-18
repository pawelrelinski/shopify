import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StructureComponent } from '@features/layout/components';
import { BannerComponent } from '@features/layout/components';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MoreFlyoutMenuComponent } from './components/more-flyout-menu/more-flyout-menu.component';
import { SolutionsFlyoutMenuComponent } from './components/solutions-flyout-menu/solutions-flyout-menu.component';

@NgModule({
	declarations: [
		StructureComponent,
		BannerComponent,
		MobileMenuComponent,
		MoreFlyoutMenuComponent,
		SolutionsFlyoutMenuComponent,
	],
	imports: [CommonModule, RouterModule],
	exports: [StructureComponent],
})
export class LayoutModule {}
