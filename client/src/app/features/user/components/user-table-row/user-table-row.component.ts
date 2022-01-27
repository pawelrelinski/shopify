import { Component, Input } from '@angular/core';
import { User } from '@features/user/models';

@Component({
  selector: 'shopify-user-table-row[user][index]',
  templateUrl: './user-table-row.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class UserTableRowComponent {
  @Input() user!: User;

  @Input()
  set index(value: number) {
    this._index = ++value;
  }

  public get index(): number {
    return this._index;
  }

  private _index!: number;
}
