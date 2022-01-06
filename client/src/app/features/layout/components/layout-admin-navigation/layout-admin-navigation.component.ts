import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'shopify-layout-admin-navigation',
  templateUrl: './layout-admin-navigation.component.html',
  styleUrls: ['./layout-admin-navigation.component.scss'],
})
export class LayoutAdminNavigationComponent {
  public menuIsOpen = true;
  private windowWidth!: number;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  public toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  public hiddenMenu(): void {
    if (this.windowWidth >= 768) {
      return;
    }
    this.toggleMenu();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }
}
