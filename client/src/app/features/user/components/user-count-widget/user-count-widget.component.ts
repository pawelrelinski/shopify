import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '@features/user/services';

@Component({
  selector: 'shopify-user-count-widget',
  templateUrl: './user-count-widget.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class UserCountWidgetComponent implements OnInit {
  public count!: number;

  private userService = inject(UserService);

  public ngOnInit(): void {
    this.setUserCount();
  }

  private setUserCount(): void {
    this.userService.getCount().subscribe(({ count }) => {
      this.count = count;
    });
  }
}
