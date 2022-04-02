import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserCountWidgetComponent,
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ShopifyErrorModule } from '@shared/shopify-error/shopify-error.module';

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
    UserCountWidgetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ShopifyPaginationModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ShopifyErrorModule,
  ],
  exports: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileOrdersComponent,
    UserProfileFavouritesComponent,
    UserProfileSettingsComponent,
    UserTableComponent,
    UserCountWidgetComponent,
  ],
})
export class UserModule {}
