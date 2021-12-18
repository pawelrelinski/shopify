import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListElementComponent } from './products-list-element.component';

describe('ProductsListElementComponent', () => {
	let component: ProductsListElementComponent;
	let fixture: ComponentFixture<ProductsListElementComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductsListElementComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsListElementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
