import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from '@features/layout/services';

@Component({
	selector: 'shopify-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
	constructor(private mobileMenuService: MobileMenuService) {}

	public ngOnInit(): void {
		this.mobileMenuService.changeMenuState(false);
	}

	public close(): void {
		this.mobileMenuService.changeMenuState(false);
	}
}
