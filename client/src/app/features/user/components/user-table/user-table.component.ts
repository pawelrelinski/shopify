import { Component, OnInit } from '@angular/core';
import { UserService } from '@features/user/services';
import { User } from '@features/user/models';

@Component({
  selector: 'shopify-user-table',
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  public customers: Array<User> = [];
  public shopifyPaginationData = {
    itemCount: 0,
    pageCount: 0,
    currentPage: 0,
  };

  constructor(private customerService: UserService) {}

  public ngOnInit(): void {
    this.setCustomers();
  }

  public changePage(event: any): void {}

  private setCustomers(): void {
    this.customerService.getAll().subscribe((customers: Array<User>) => {
      this.customers = customers;
    });
  }
}
