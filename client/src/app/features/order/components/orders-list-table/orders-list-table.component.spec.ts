import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListTableComponent } from './orders-list-table.component';

describe('OrdersListTableComponent', () => {
	let component: OrdersListTableComponent;
	let fixture: ComponentFixture<OrdersListTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OrdersListTableComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OrdersListTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
