import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileFavouritesPageRoutingModule } from './profile-favourites-page-routing.module';
import { ProfileFavouritesPageComponent } from './profile-favourites-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
  declarations: [ProfileFavouritesPageComponent],
  imports: [CommonModule, ProfileFavouritesPageRoutingModule, CustomerModule],
})
export class ProfileFavouritesPageModule {}
