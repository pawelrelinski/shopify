import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { ProductService } from '@features/product/services';

@Component({
	selector: 'shopify-available-products-widget',
	templateUrl: './available-products-widget.component.html',
	styleUrls: ['./available-products-widget.component.scss'],
})
export class AvailableProductsWidgetComponent implements OnInit {
	public count!: number;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.setProductsCount();
	}

	private setProductsCount(): void {
		const options = new Map<string, string>();

		this.productService
			.getMetadata(options)
			.pipe(take(1))
			.subscribe((data) => {
				this.count = data.count;
			});
	}
}
