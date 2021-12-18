import { Component } from '@angular/core';
import { FlyoutMenuService } from '@features/layout/services';
import { FlyoutMenu } from '@features/layout/models';

@Component({
	selector: 'shopify-more-flyout-menu',
	templateUrl: './more-flyout-menu.component.html',
	styleUrls: ['./more-flyout-menu.component.scss'],
})
export class MoreFlyoutMenuComponent {
	public flyoutMenuName!: FlyoutMenu;
	public showFlyoutMenu: boolean = false;

	constructor(private flyoutMenuService: FlyoutMenuService) {}

	public ngOnInit(): void {
		this.updateFlyoutMenuName();
	}

	public toggleFlyoutMenu(): void {
		if (this.showFlyoutMenu) {
			this.showFlyoutMenu = false;
		} else {
			this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.MORE);
			this.checkFlyoutMenuName();
		}
	}

	private updateFlyoutMenuName(): void {
		this.flyoutMenuService.flyoutMenu.subscribe((flyoutMenuName: FlyoutMenu) => {
			this.flyoutMenuName = flyoutMenuName;
			this.checkFlyoutMenuName();
		});
	}

	private checkFlyoutMenuName(): void {
		this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.MORE;
	}
}
