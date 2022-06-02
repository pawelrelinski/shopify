import { Component, inject, OnInit } from '@angular/core';
import {
  CurrentSelectedTabService,
  Tabs,
} from '@features/user/components/user-profile-settings/services/current-selected-tab.service';

@Component({
  selector: 'shopify-user-profile-settings-tabs',
  templateUrl: './user-profile-settings-tabs.component.html',
  styles: [
    `
      .current {
        @apply border-green-500 text-green-600;
      }
    `,
  ],
})
export class UserProfileSettingsTabsComponent implements OnInit {
  public currentSelectedTab!: Tabs;
  public readonly currentSelectedTabService = inject(CurrentSelectedTabService);

  public ngOnInit(): void {
    this.currentSelectedTabService.currentSelectedTab.subscribe((currentSelectedTab: Tabs) => {
      this.currentSelectedTab = currentSelectedTab;
    });
  }

  public onTabChange(tab: Tabs | string): void {
    this.currentSelectedTabService.setCurrentSelectedTab(tab as Tabs);
  }
}
