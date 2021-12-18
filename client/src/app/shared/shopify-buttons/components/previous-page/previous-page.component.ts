import { Component, HostBinding, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'shopify-previous-page',
	templateUrl: './previous-page.component.html',
})
export class PreviousPageComponent {
	@HostBinding('style.cursor') cursor!: string;

	constructor(private location: Location) {}

	@HostListener('mouseover')
	public onMouseOver(): void {
		this.cursor = 'pointer';
	}

	@HostListener('mouseleave')
	public onMouseLeave(): void {
		this.cursor = '';
	}

	@HostListener('click')
	public onClick(): void {
		this.location.back();
	}
}
