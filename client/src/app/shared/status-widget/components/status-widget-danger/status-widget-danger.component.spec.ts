import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetDangerComponent } from './status-widget-danger.component';

describe('StatusWidgetErrorComponent', () => {
  let component: StatusWidgetDangerComponent;
  let fixture: ComponentFixture<StatusWidgetDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusWidgetDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWidgetDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
