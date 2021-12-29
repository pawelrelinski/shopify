import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileOrdersComponent } from './customer-profile-orders.component';

describe('CustomerProfileOrdersComponent', () => {
  let component: CustomerProfileOrdersComponent;
  let fixture: ComponentFixture<CustomerProfileOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
