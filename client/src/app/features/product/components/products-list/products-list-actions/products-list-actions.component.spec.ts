import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListActionsComponent } from './products-list-actions.component';

describe('ProductsListActionsComponent', () => {
	let component: ProductsListActionsComponent;
	let fixture: ComponentFixture<ProductsListActionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductsListActionsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsListActionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
