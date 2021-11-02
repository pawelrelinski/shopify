import {Component} from '@angular/core';

@Component({
  selector: 'shopify-products-table-actions',
  templateUrl: './products-table-actions.component.html',
  styleUrls: ['./products-table-actions.component.scss']
})
export class ProductsTableActionsComponent {
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
