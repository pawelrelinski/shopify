import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileFavouritesPageRoutingModule } from './profile-favourites-page-routing.module';
import { ProfileFavouritesPageComponent } from './profile-favourites-page.component';
import { UserModule } from '@features/user/user.module';

@NgModule({
  declarations: [ProfileFavouritesPageComponent],
  imports: [CommonModule, ProfileFavouritesPageRoutingModule, UserModule],
})
export class ProfileFavouritesPageModule {}
