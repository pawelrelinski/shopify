import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerProfileSettingsEditFirstNameDialogComponent } from '@features/customer/components';

@Component({
  selector: 'shopify-customer-profile-settings',
  templateUrl: './customer-profile-settings.component.html',
  styleUrls: ['./customer-profile-settings.component.scss'],
})
export class CustomerProfileSettingsComponent {
  public userInfo = {
    firstName: 'Margot',
    lastName: 'Foster',
    email: 'margotfoster@example.com',
    password: 'test123!@#',
  };

  constructor(private dialog: MatDialog) {}

  public openEditNameDialog(): void {
    const dialogRef = this.dialog.open(CustomerProfileSettingsEditFirstNameDialogComponent, {
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
