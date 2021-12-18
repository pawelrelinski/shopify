import { Component, Input } from '@angular/core';

@Component({
	selector: 'shopify-product-path',
	templateUrl: './product-path.component.html',
	styleUrls: ['./product-path.component.scss'],
})
export class ProductPathComponent {
	@Input()
	path!: Array<string>;
}
