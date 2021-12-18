import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManageComponent } from './orders-manage.component';

describe('OrdersManageComponent', () => {
	let component: OrdersManageComponent;
	let fixture: ComponentFixture<OrdersManageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OrdersManageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OrdersManageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
