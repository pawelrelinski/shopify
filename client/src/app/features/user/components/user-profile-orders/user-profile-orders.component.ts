import { Component, inject } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  CurrentSelectedTabService,
  Tabs,
} from "./services/current-selected-tab.service";

@Component({
  selector: "shopify-user-profile-orders",
  templateUrl: "./user-profile-orders.component.html",
  animations: [
    trigger("enterTrigger", [
      state(
        "fadeIn",
        style({
          opacity: "1",
          transform: "translateY(50%)",
        })
      ),
      transition("void => *", [style({ opacity: "0" }), animate("500ms")]),
    ]),
  ],
})
export class UserProfileOrdersComponent {
  public readonly currentSelectedTabService = inject(CurrentSelectedTabService);
  public currentSelectedTab!: Tabs;

  public ngOnInit(): void {
    this.currentSelectedTabService.currentSelectedTab.subscribe(
      (currentSelectedTab: Tabs) => {
        this.currentSelectedTab = currentSelectedTab;
      }
    );
  }
}
