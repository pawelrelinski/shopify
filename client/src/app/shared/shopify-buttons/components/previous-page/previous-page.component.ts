import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'shopify-previous-page',
  templateUrl: './previous-page.component.html'
})
export class PreviousPageComponent {
  constructor(private location: Location) {
  }

  public goBack(): void {
    this.location.back();
  }
}
