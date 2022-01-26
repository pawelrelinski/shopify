import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersManageComponent } from './customers-manage.component';

describe('CustomersManageComponent', () => {
  let component: CustomersManageComponent;
  let fixture: ComponentFixture<CustomersManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersManageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
