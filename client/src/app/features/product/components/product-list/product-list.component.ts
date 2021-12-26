import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'shopify-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public categoryName!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryName = ProductListComponent.toTitleCase(params.category);
    });
  }

  private static toTitleCase(str: string): string {
    let rest = [...str.split('-').join(' ')];
    rest[0] = rest[0].toUpperCase();
    return rest.join('');
  }
}
