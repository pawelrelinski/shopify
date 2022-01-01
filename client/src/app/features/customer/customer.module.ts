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
} from '@features/customer/components';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [CommonModule, RouterModule, MatDialogModule, FormsModule, ReactiveFormsModule],
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
