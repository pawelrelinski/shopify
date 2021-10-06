import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetErrorComponent } from './status-widget-error.component';

describe('StatusWidgetErrorComponent', () => {
  let component: StatusWidgetErrorComponent;
  let fixture: ComponentFixture<StatusWidgetErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusWidgetErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWidgetErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
