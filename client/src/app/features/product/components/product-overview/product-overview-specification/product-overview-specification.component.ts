import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'shopify-product-overview-specification[specification]',
  templateUrl: './product-overview-specification.component.html',
  styleUrls: ['./product-overview-specification.component.scss'],
})
export class ProductOverviewSpecificationComponent implements OnChanges {
  @Input() specification!: string | undefined;

  public specificationAsArrayOfObject!: Array<{ key: string; value: string }>;

  public ngOnChanges(changes: SimpleChanges): void {
    this.specificationAsArrayOfObject = JSON.parse(changes.specification.currentValue);
  }
}
