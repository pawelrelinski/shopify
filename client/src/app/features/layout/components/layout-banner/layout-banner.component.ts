import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopify-layout-banner',
  templateUrl: './layout-banner.component.html',
})
export class LayoutBannerComponent {
  @Output()
  emitClickCloseBtn = new EventEmitter<null>();

  public emitClose(): void {
    this.emitClickCloseBtn.emit();
  }
}
