import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetNeutralComponent } from './status-widget-neutral.component';

describe('StatusWidgetNeutralComponent', () => {
	let component: StatusWidgetNeutralComponent;
	let fixture: ComponentFixture<StatusWidgetNeutralComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StatusWidgetNeutralComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StatusWidgetNeutralComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
