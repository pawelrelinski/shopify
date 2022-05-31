import { NgModule } from '@angular/core';
import { ProfilePageRoutingModule } from '@pages/customer/profile-page/profile-page-routing.module';
import { UserModule } from '@features/user/user.module';
import { ProfilePageComponent } from '@pages/customer/profile-page/profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [ProfilePageRoutingModule, UserModule],
})
export class ProfilePageModule {}
