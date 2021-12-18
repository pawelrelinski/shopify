import { Component } from '@angular/core';

import { ProductService } from '@features/product/services';
import { ProductResponse } from '@features/product/models';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Response } from '@core/interfaces';

@Component({
	selector: 'shopify-product-overview',
	templateUrl: './product-overview.component.html',
	styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent {
	public path: Array<string> = ['Men', 'Shirts', 'Black t-shirt'];
	public product!: Response<ProductResponse>;

	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

	public ngOnInit(): void {
		this.setProduct();
	}

	private setProduct(): void {
		let productId!: number;
		this.activatedRoute.params
			.pipe(
				mergeMap((params) => {
					productId = params.productId as number;
					return this.productService.getById(productId);
				})
			)
			.subscribe((product: Response<ProductResponse>) => {
				if (product.status === 200) {
					this.product = product;
				}
			});
	}
}
