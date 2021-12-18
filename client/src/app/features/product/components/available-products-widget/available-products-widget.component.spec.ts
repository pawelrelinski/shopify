import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableProductsWidgetComponent } from './available-products-widget.component';

describe('AvailableProductsWidgetComponent', () => {
	let component: AvailableProductsWidgetComponent;
	let fixture: ComponentFixture<AvailableProductsWidgetComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AvailableProductsWidgetComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AvailableProductsWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
