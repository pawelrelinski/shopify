import { Product } from './product';

describe('Product', () => {
	const productName = 't-shirt';
	let product!: Product;

	beforeEach(() => {
		product = new Product(1, productName, 'This is shirt', 4, 12.99);
	});

	it('should return product name', () => {
		expect(product.getName()).toBe(productName);
	});
});
