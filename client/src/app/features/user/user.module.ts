import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserCountWidgetComponent,
  UserProfileComponent,
  UserProfileFavouritesComponent,
  UserProfileOrdersComponent,
  UserProfileReportingTilesComponent,
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
import { UserProfileSettingsModule } from '@features/user/components/user-profile-settings/user-profile-settings.module';

@NgModule({
  declarations: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileReportingTilesComponent,
    UserProfileOrdersComponent,
    UserProfileFavouritesComponent,
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
    UserProfileSettingsModule,
  ],
  exports: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileOrdersComponent,
    UserProfileFavouritesComponent,
    UserTableComponent,
    UserCountWidgetComponent,
    UserProfileSettingsModule,
  ],
})
export class UserModule {}
