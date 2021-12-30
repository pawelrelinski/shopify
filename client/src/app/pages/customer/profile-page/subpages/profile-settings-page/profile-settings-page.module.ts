import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsPageRoutingModule } from './profile-settings-page-routing.module';
import { ProfileSettingsPageComponent } from './profile-settings-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
  declarations: [ProfileSettingsPageComponent],
  imports: [CommonModule, ProfileSettingsPageRoutingModule, CustomerModule],
})
export class ProfileSettingsPageModule {}
