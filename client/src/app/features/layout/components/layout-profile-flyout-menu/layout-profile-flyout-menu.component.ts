import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopify-layout-profile-flyout-menu',
  templateUrl: './layout-profile-flyout-menu.component.html',
})
export class LayoutProfileFlyoutMenuComponent {
  @Output() onSignOut = new EventEmitter<any>();
  @Output() onClickLink = new EventEmitter<any>();

  public emitSignOut(): void {
    this.onSignOut.emit();
    this.emitOnClickLink();
  }

  public emitOnClickLink(): void {
    this.onClickLink.emit();
  }
}
