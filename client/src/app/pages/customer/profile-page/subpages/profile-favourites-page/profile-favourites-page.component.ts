import { Component } from '@angular/core';
import { UserModule } from '@features/user/user.module';

@Component({
  selector: 'shopify-profile-favourites-page',
  templateUrl: './profile-favourites-page.component.html',
  standalone: true,
  imports: [UserModule],
})
export class ProfileFavouritesPageComponent {}
