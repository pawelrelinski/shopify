import { Component } from '@angular/core';
import { UserModule } from '@features/user/user.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-profile-favourites-page',
  templateUrl: './profile-favourites-page.component.html',
  standalone: true,
  imports: [UserModule, ShopifyButtonsModule],
})
export class ProfileFavouritesPageComponent {}
