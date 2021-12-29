import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, ProfilePageRoutingModule, CustomerModule],
})
export class ProfilePageModule {}
