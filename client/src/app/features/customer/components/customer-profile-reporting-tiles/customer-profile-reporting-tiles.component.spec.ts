import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileReportingTilesComponent } from './customer-profile-reporting-tiles.component';

describe('CustomerProfileReportingTilesComponent', () => {
  let component: CustomerProfileReportingTilesComponent;
  let fixture: ComponentFixture<CustomerProfileReportingTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileReportingTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileReportingTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
