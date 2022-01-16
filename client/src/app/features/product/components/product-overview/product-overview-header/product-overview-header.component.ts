import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface EmitItemData {
  id: number;
  quantity: number;
}

@Component({
  selector: 'shopify-product-overview-header[name][shortDescription][id][price]',
  templateUrl: './product-overview-header.component.html',
  styleUrls: ['./product-overview-header.component.scss'],
})
export class ProductOverviewHeaderComponent {
  @Input() name!: string;
  @Input() shortDescription!: string;
  @Input() id!: number;
  @Input() price!: number | string;
  @Output() onEmitItemData: EventEmitter<EmitItemData> = new EventEmitter<EmitItemData>();

  private item: EmitItemData = {
    id: this.id,
    quantity: 0,
  };

  public emitItemId(): void {
    this.onEmitItemData.emit(this.item);
  }

  public updateEmitItemQuantity(event: number): void {
    this.item.quantity = event;
  }
}
