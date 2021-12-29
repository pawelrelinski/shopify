import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignInFormComponent } from '@features/customer/components';
import { RouterModule } from '@angular/router';
import { CustomerSignUpFormComponent } from '@features/customer/components';
import { CustomerProfileComponent } from '@features/customer/components';
import { CustomerProfileReportingTilesComponent } from '@features/customer/components';
import { CustomerProfileOrdersComponent } from '@features/customer/components';
import { CustomerProfileFavouritesComponent } from '@features/customer/components';
import { CustomerProfileSettingsComponent } from '@features/customer/components';

@NgModule({
  declarations: [
    CustomerSignInFormComponent,
    CustomerSignUpFormComponent,
    CustomerProfileComponent,
    CustomerProfileReportingTilesComponent,
    CustomerProfileOrdersComponent,
    CustomerProfileFavouritesComponent,
    CustomerProfileSettingsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CustomerSignInFormComponent,
    CustomerSignUpFormComponent,
    CustomerProfileComponent,
    CustomerProfileOrdersComponent,
    CustomerProfileFavouritesComponent,
    CustomerProfileSettingsComponent,
  ],
})
export class CustomerModule {}
