import {Component, HostListener} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'shopify-previous-page',
  templateUrl: './previous-page.component.html'
})
export class PreviousPageComponent {
  constructor(private location: Location) {
  }

  @HostListener('click')
  public onClick(): void {
    this.location.back();
  }
}
