import { Component, Input } from '@angular/core';
import { Customer } from '@features/customer/models';

@Component({
  selector: 'shopify-customer-table-row[customer][index]',
  templateUrl: './customer-table-row.component.html',
  styleUrls: ['./customer-table-row.component.scss'],
})
export class CustomerTableRowComponent {
  @Input() customer!: Customer;
  @Input() index!: number;
}
