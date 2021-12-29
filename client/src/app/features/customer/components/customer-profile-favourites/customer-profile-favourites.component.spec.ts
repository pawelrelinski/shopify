import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileFavouritesComponent } from './customer-profile-favourites.component';

describe('CustomerProfileFavouritesComponent', () => {
  let component: CustomerProfileFavouritesComponent;
  let fixture: ComponentFixture<CustomerProfileFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileFavouritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
