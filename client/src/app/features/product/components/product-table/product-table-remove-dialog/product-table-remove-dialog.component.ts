import { Component } from '@angular/core';
import { MatDialogCloseRemoveDialog } from '@features/product/models';

@Component({
  selector: 'shopify-product-table-remove-dialog',
  templateUrl: './product-table-remove-dialog.component.html',
  styleUrls: ['./product-table-remove-dialog.component.scss'],
})
export class ProductTableRemoveDialogComponent {
  public matDialogCloseDelete = MatDialogCloseRemoveDialog.DELETE;
  public matDialogCloseCancel = MatDialogCloseRemoveDialog.CANCEL;
}
