import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  UserCountWidgetComponent,
  UserProfileComponent,
  UserProfileFavouritesComponent,
  UserProfileReportingTilesComponent,
  UserSignInFormComponent,
  UserSignUpFormComponent,
  UserTableComponent,
  UserTableRowComponent,
} from "@features/user/components";
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShopifyPaginationModule } from "@shared/shopify-pagination/shopify-pagination.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ShopifyErrorModule } from "@shared/shopify-error/shopify-error.module";
import { UserProfileSettingsModule } from "@features/user/components/user-profile-settings/user-profile-settings.module";
import { UserProfileOrdersModule } from "@features/user/components/user-profile-orders/user-profile-orders.module";

@NgModule({
  declarations: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileReportingTilesComponent,
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
    UserProfileOrdersModule,
  ],
  exports: [
    UserSignInFormComponent,
    UserSignUpFormComponent,
    UserProfileComponent,
    UserProfileOrdersModule,
    UserProfileFavouritesComponent,
    UserTableComponent,
    UserCountWidgetComponent,
    UserProfileSettingsModule,
  ],
})
export class UserModule {}
