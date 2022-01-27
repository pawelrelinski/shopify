import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserProfileComponent,
  UserProfileFavouritesComponent,
  UserProfileOrdersComponent,
  UserProfileReportingTilesComponent,
  UserProfileSettingsComponent,
  UserProfileSettingsEditFirstNameDialogComponent,
  UserSignInFormComponent,
  UserSignUpFormComponent,
  UserTableComponent,
  UserTableRowComponent,
} from '@features/user/components';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';

@NgModule({
  declarations: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileReportingTilesComponent,
    UserProfileOrdersComponent,
    UserProfileFavouritesComponent,
    UserProfileSettingsComponent,
    UserProfileSettingsEditFirstNameDialogComponent,
    UserTableComponent,
    UserTableRowComponent,
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
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileOrdersComponent,
    UserProfileFavouritesComponent,
    UserProfileSettingsComponent,
    UserTableComponent,
  ],
})
export class UserModule {}
