import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'shopify-user-profile-settings-notifications',
  templateUrl: './user-profile-settings-notifications.component.html',
  animations: [
    trigger('translateX', [
      state(
        'notEnabled',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'enabled',
        style({
          transform: 'translateX(1.25rem)',
        })
      ),
      transition('notEnabled => enabled', animate('100ms ease-in')),
      transition('enabled => notEnabled', animate('100ms ease-out')),
    ]),
  ],
})
export class UserProfileSettingsNotificationsComponent {
  public isEnabled = false;

  public toggleEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
