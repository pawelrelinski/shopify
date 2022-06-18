import { Component, Input } from "@angular/core";

@Component({
  selector: "shopify-order-card-list",
  templateUrl: "./order-card-list.component.html",
})
export class OrderCardListComponent {
  @Input() title!: string;
}
