import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileSettingsEditFirstNameDialogComponent } from '@features/user/components';
import { UserService } from '@features/user/services';

@Component({
  selector: 'shopify-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
})
export class UserProfileSettingsComponent implements OnInit {
  public user = {
    firstName: 'Margot',
    lastName: 'Foster',
    email: 'margotfoster@example.com',
  };

  constructor(private dialog: MatDialog, private userService: UserService) {}

  public ngOnInit(): void {}

  public openEditNameDialog(): void {
    const dialogRef = this.dialog.open(UserProfileSettingsEditFirstNameDialogComponent, {
      data: {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
      },
      minWidth: 320,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const newUserData = result;
    });
  }

  private setUser(): void {}
}
