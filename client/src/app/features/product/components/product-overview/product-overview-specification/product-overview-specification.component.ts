import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shopify-product-overview-specification[specification]',
  templateUrl: './product-overview-specification.component.html',
  styleUrls: ['./product-overview-specification.component.scss'],
})
export class ProductOverviewSpecificationComponent implements OnInit {
  @Input() specification!: object;

  public specificationAsArrayOfObject: Array<{ key: string; value: string }> = [];

  public ngOnInit() {
    this.convertObjectToArray();
  }

  private convertObjectToArray(): void {
    for (const [key, value] of Object.entries(this.specification)) {
      this.specificationAsArrayOfObject.push({ key, value });
    }
  }
}
