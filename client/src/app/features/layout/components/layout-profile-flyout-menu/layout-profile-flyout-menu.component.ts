import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopify-layout-profile-flyout-menu',
  templateUrl: './layout-profile-flyout-menu.component.html',
  styleUrls: ['./layout-profile-flyout-menu.component.scss'],
})
export class LayoutProfileFlyoutMenuComponent {
  @Output() onSignOut: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickLink: EventEmitter<any> = new EventEmitter<any>();

  public emitSignOut(): void {
    this.onSignOut.emit();
    this.emitOnClickLink();
  }

  public emitOnClickLink(): void {
    this.onClickLink.emit();
  }
}
