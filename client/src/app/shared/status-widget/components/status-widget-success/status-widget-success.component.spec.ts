import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWidgetSuccessComponent } from './status-widget-success.component';

describe('StatusWidgetSuccessComponent', () => {
  let component: StatusWidgetSuccessComponent;
  let fixture: ComponentFixture<StatusWidgetSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusWidgetSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWidgetSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
