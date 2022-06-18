import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileOrdersHistoryComponent } from "./components/user-profile-orders-history/user-profile-orders-history.component";
import { UserProfileOrdersActiveComponent } from "./components/user-profile-orders-active/user-profile-orders-active.component";
import { UserProfileOrdersComponent } from "@features/user/components/user-profile-orders/user-profile-orders.component";
import { UserProfileOrdersTabsComponent } from "./components/user-profile-orders-tabs/user-profile-orders-tabs.component";
import { OrderModule } from "@features/order/order.module";
import { UserProfileOrdersActiveElementComponent } from './components/user-profile-orders-active-element/user-profile-orders-active-element.component';

@NgModule({
  declarations: [
    UserProfileOrdersComponent,
    UserProfileOrdersHistoryComponent,
    UserProfileOrdersActiveComponent,
    UserProfileOrdersTabsComponent,
    UserProfileOrdersActiveElementComponent,
  ],
  imports: [CommonModule, OrderModule],
  exports: [UserProfileOrdersComponent],
})
export class UserProfileOrdersModule {}
