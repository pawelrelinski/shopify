import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductModule } from '@features/product/product.module';
import { UserModule } from '@features/user/user.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ProductModule, UserModule],
})
export class DashboardModule {}
