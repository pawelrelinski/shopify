import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListTableRowComponent } from './products-list-table-row.component';

describe('ProductsListTableRowComponent', () => {
  let component: ProductsListTableRowComponent;
  let fixture: ComponentFixture<ProductsListTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
