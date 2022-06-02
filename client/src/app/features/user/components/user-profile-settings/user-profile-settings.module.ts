import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileSettingsTabsComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-tabs/user-profile-settings-tabs.component';
import { UserProfileSettingsEditFirstNameDialogComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-edit-first-name-dialog/user-profile-settings-edit-first-name-dialog.component';
import { UserProfileSettingsComponent } from '@features/user/components/user-profile-settings/user-profile-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { UserProfileSettingsGeneralComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-general/user-profile-settings-general.component';
import { UserProfileSettingsPasswordComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-password/user-profile-settings-password.component';
import { UserProfileSettingsNotificationsComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-notifications/user-profile-settings-notifications.component';
import { UserProfileSettingsBillingComponent } from '@features/user/components/user-profile-settings/components/user-profile-settings-billing/user-profile-settings-billing.component';

@NgModule({
  declarations: [
    UserProfileSettingsTabsComponent,
    UserProfileSettingsEditFirstNameDialogComponent,
    UserProfileSettingsComponent,
    UserProfileSettingsGeneralComponent,
    UserProfileSettingsPasswordComponent,
    UserProfileSettingsNotificationsComponent,
    UserProfileSettingsBillingComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTooltipModule, MatDialogModule],
  exports: [UserProfileSettingsComponent, UserProfileSettingsEditFirstNameDialogComponent],
})
export class UserProfileSettingsModule {}
