import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shopify-product-list-pagination[pageCount][currentPage]',
  templateUrl: './product-list-pagination.component.html',
})
export class ProductListPaginationComponent {
  @Input() pageCount!: number;
  @Input() currentPage!: number;

  @Output() onChangePage = new EventEmitter<number>();

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
    this.changePage(this.currentPage);
  }

  public nextPage(): void {
    if (this.currentPage !== this.pageCount) {
      this.currentPage += 1;
    }
    this.changePage(this.currentPage);
  }

  public changePage(pageNumber: number): void {
    this.onChangePage.emit(pageNumber);
    this.currentPage = pageNumber;
  }

  public plusOne(value: number): number {
    return ++value;
  }

  public getPageCount(): number[] {
    return Array(this.pageCount).fill(1);
  }
}
