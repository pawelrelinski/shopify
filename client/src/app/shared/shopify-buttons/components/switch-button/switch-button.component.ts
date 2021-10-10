import {Component} from '@angular/core';

@Component({
  selector: 'shopify-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent {
  public isChecked: boolean = false;

  public toggle(): void {
    this.isChecked = !this.isChecked;
  }
}
