import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileOrdersPageRoutingModule } from './profile-orders-page-routing.module';
import { ProfileOrdersPageComponent } from './profile-orders-page.component';
import { CustomerModule } from '@features/customer/customer.module';

@NgModule({
  declarations: [ProfileOrdersPageComponent],
  imports: [CommonModule, ProfileOrdersPageRoutingModule, CustomerModule],
})
export class ProfileOrdersPageModule {}
