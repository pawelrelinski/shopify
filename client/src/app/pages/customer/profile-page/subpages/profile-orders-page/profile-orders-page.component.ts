import { Component } from '@angular/core';
import { UserModule } from '@features/user/user.module';
import { OrderModule } from '@features/order/order.module';

@Component({
  selector: 'shopify-profile-orders-page',
  templateUrl: './profile-orders-page.component.html',
  standalone: true,
  imports: [UserModule, OrderModule],
})
export class ProfileOrdersPageComponent {}
