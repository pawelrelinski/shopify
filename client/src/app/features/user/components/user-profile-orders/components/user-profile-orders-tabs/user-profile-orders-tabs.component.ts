import { Component, inject, OnInit } from "@angular/core";
import {
  CurrentSelectedTabService,
  Tabs,
} from "../../services/current-selected-tab.service";

@Component({
  selector: "shopify-user-profile-orders-tabs",
  templateUrl: "./user-profile-orders-tabs.component.html",
  styles: [
    `
      .current {
        @apply border-green-500 text-green-600;
      }
    `,
  ],
})
export class UserProfileOrdersTabsComponent implements OnInit {
  public currentSelectedTab!: Tabs;
  public readonly currentSelectedTabService = inject(CurrentSelectedTabService);

  public ngOnInit(): void {
    this.currentSelectedTabService.currentSelectedTab.subscribe(
      (currentSelectedTab: Tabs) => {
        this.currentSelectedTab = currentSelectedTab;
      }
    );
  }

  public onTabChange(tab: Tabs | string): void {
    this.currentSelectedTabService.setCurrentSelectedTab(tab as Tabs);
  }
}
