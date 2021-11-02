import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableRowComponent } from './products-table-row.component';

describe('ProductsListTableRowComponent', () => {
  let component: ProductsTableRowComponent;
  let fixture: ComponentFixture<ProductsTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
