import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CustomerProfileComponent,
  CustomerProfileFavouritesComponent,
  CustomerProfileOrdersComponent,
  CustomerProfileReportingTilesComponent,
  CustomerProfileSettingsComponent,
  CustomerProfileSettingsEditFirstNameDialogComponent,
  CustomerSignInFormComponent,
  CustomerSignUpFormComponent,
  CustomerTableComponent,
  CustomerTableRowComponent,
} from '@features/customer/components';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';

@NgModule({
  declarations: [
    CustomerSignInFormComponent,
    CustomerSignUpFormComponent,
    CustomerProfileComponent,
    CustomerProfileReportingTilesComponent,
    CustomerProfileOrdersComponent,
    CustomerProfileFavouritesComponent,
    CustomerProfileSettingsComponent,
    CustomerProfileSettingsEditFirstNameDialogComponent,
    CustomerTableComponent,
    CustomerTableRowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ShopifyPaginationModule,
  ],
  exports: [
    CustomerSignInFormComponent,
    CustomerSignUpFormComponent,
    CustomerProfileComponent,
    CustomerProfileOrdersComponent,
    CustomerProfileFavouritesComponent,
    CustomerProfileSettingsComponent,
    CustomerTableComponent,
  ],
})
export class CustomerModule {}
