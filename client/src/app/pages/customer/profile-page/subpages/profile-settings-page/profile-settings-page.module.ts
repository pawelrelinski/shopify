import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsPageRoutingModule } from './profile-settings-page-routing.module';
import { ProfileSettingsPageComponent } from './profile-settings-page.component';
import { UserModule } from '@features/user/user.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [ProfileSettingsPageComponent],
  imports: [CommonModule, ProfileSettingsPageRoutingModule, UserModule, ShopifyButtonsModule],
})
export class ProfileSettingsPageModule {}
