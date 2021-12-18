import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListTableRowComponent } from './orders-list-table-row.component';

describe('OrdersListTableRowComponent', () => {
	let component: OrdersListTableRowComponent;
	let fixture: ComponentFixture<OrdersListTableRowComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OrdersListTableRowComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OrdersListTableRowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
