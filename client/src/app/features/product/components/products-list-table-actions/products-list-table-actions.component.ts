import {Component} from '@angular/core';

@Component({
  selector: 'shopify-products-list-table-actions',
  templateUrl: './products-list-table-actions.component.html',
  styleUrls: ['./products-list-table-actions.component.scss']
})
export class ProductsListTableActionsComponent {
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
