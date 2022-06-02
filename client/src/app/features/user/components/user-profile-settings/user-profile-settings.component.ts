import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import {
  CurrentSelectedTabService,
  Tabs,
} from '@features/user/components/user-profile-settings/services/current-selected-tab.service';

@Component({
  selector: 'shopify-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  animations: [
    trigger('enterTrigger', [
      state(
        'fadeIn',
        style({
          opacity: '1',
          transform: 'translateY(50%)',
        })
      ),
      transition('void => *', [style({ opacity: '0' }), animate('500ms')]),
    ]),
  ],
})
export class UserProfileSettingsComponent implements OnInit {
  public readonly currentSelectedTabService = inject(CurrentSelectedTabService);
  public currentSelectedTab!: Tabs;

  public ngOnInit(): void {
    this.currentSelectedTabService.currentSelectedTab.subscribe((currentSelectedTab: Tabs) => {
      this.currentSelectedTab = currentSelectedTab;
    });
  }
}
