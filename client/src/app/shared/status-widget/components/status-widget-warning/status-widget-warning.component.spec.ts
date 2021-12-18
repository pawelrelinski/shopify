import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetWarningComponent } from '@shared/status-widget/components';

describe('StatusWidgetWarningComponent', () => {
	let component: StatusWidgetWarningComponent;
	let fixture: ComponentFixture<StatusWidgetWarningComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StatusWidgetWarningComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StatusWidgetWarningComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
