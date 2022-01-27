import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileOrdersPageRoutingModule } from './profile-orders-page-routing.module';
import { ProfileOrdersPageComponent } from './profile-orders-page.component';
import { UserModule } from '@features/user/user.module';
import { OrderModule } from '@features/order/order.module';

@NgModule({
  declarations: [ProfileOrdersPageComponent],
  imports: [CommonModule, ProfileOrdersPageRoutingModule, UserModule, OrderModule],
})
export class ProfileOrdersPageModule {}
