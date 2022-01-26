import { Component, OnInit } from '@angular/core';
import { CustomerService } from '@features/customer/services';
import { Customer } from '@features/customer/models';

@Component({
  selector: 'shopify-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnInit {
  public customers: Array<Customer> = [];
  public shopifyPaginationData = {
    itemCount: 0,
    pageCount: 0,
    currentPage: 0,
  };

  constructor(private customerService: CustomerService) {}

  public ngOnInit(): void {
    this.setCustomers();
  }

  public changePage(event: any): void {}

  private setCustomers(): void {
    this.customerService.getAll().subscribe((customers: Array<Customer>) => {
      this.customers = customers;
    });
  }
}
