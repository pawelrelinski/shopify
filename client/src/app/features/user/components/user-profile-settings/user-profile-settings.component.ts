import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileSettingsEditFirstNameDialogComponent } from '@features/user/components';

@Component({
  selector: 'shopify-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
})
export class UserProfileSettingsComponent {
  public userInfo = {
    firstName: 'Margot',
    lastName: 'Foster',
    email: 'margotfoster@example.com',
    password: 'test123!@#',
  };

  constructor(private dialog: MatDialog) {}

  public openEditNameDialog(): void {
    const dialogRef = this.dialog.open(UserProfileSettingsEditFirstNameDialogComponent, {
      data: {
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        email: this.userInfo.email,
        password: this.userInfo.password,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
