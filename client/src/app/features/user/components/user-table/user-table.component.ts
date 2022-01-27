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
    currentPage: 1,
  };

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.setUsers();
    this.setUsersCount();
  }

  public trackByUserId(index: number, user: User): User['id'] {
    return user.id;
  }

  public changePage(pageNumber: number): void {
    this.shopifyPaginationData.currentPage = pageNumber;
    this.setUsers();
  }

  private setUsers(): void {
    this.userService.getAll().subscribe((customers: Array<User>) => {
      this.customers = customers;
    });
  }

  private setUsersCount(): void {
    this.userService.getCount().subscribe(({ count }) => {
      this.shopifyPaginationData.itemCount = count;
      this.setPaginationPageCount();
    });
  }

  private setPaginationPageCount(): void {
    this.shopifyPaginationData.pageCount = +(this.shopifyPaginationData.itemCount / 10).toFixed(0);
    this.shopifyPaginationData.itemCount % 10 > 0
      ? (this.shopifyPaginationData.pageCount += 1)
      : null;
  }
}
