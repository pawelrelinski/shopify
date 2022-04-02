import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseErrorListComponent } from './response-error-list.component';

describe('ResponseErrorListComponent', () => {
  let component: ResponseErrorListComponent;
  let fixture: ComponentFixture<ResponseErrorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseErrorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseErrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
