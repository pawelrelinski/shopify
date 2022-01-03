import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shopify-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input()
  productCount!: number;

  @Input()
  pageCount!: number;

  @Input()
  currentPage!: number;

  @Output()
  onChangePage: EventEmitter<number> = new EventEmitter<number>();

  private readonly defaultRange = { from: 1, to: 10 };

  public range = { from: 1, to: 10 };

  public ngOnInit(): void {
    this.setRange();
  }

  public getPageCount(): Array<number> {
    return Array(this.pageCount).fill(1);
  }

  public plusOne(value: number): number {
    return ++value;
  }

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
    this.setRange();
  }

  public setRange(): void {
    if (this.currentPage === 1) {
      this.range.from = 1;
      this.range.to = 10;
    } else {
      this.range.from = this.getRangeFrom();
      this.range.to = this.getRangeTo();
    }
  }

  private getRangeFrom(): number {
    return (this.currentPage - 1) * 10 + 1;
  }

  private getRangeTo(): number {
    if (this.currentPage === this.pageCount) {
      return this.productCount;
    } else {
      return (this.currentPage - 1) * 10 + 10;
    }
  }

  // private pageManipulation(): void {
  //   const pageStatus: Map<number, () => void> = new Map<number, () => void>()
  //     .set()
  // }
}
