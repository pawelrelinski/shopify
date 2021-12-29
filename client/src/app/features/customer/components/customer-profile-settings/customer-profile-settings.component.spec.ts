import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileSettingsComponent } from './customer-profile-settings.component';

describe('CustomerProfileSettingsComponent', () => {
  let component: CustomerProfileSettingsComponent;
  let fixture: ComponentFixture<CustomerProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
