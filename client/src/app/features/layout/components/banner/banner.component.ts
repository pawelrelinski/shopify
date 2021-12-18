import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'shopify-banner',
	templateUrl: './banner.component.html',
})
export class BannerComponent {
	@Output()
	emitClickCloseBtn: EventEmitter<null> = new EventEmitter<null>();

	public emitClose(): void {
		this.emitClickCloseBtn.emit();
	}
}
