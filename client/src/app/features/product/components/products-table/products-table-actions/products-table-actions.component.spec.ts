import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableActionsComponent } from './products-table-actions.component';

describe('ProductsListTableActionsComponent', () => {
	let component: ProductsTableActionsComponent;
	let fixture: ComponentFixture<ProductsTableActionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductsTableActionsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsTableActionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
