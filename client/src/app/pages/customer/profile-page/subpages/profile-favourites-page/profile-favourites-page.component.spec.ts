import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavouritesPageComponent } from './profile-favourites-page.component';

describe('ProfileFavouritesPageComponent', () => {
  let component: ProfileFavouritesPageComponent;
  let fixture: ComponentFixture<ProfileFavouritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileFavouritesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavouritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
