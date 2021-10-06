import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListTableComponent } from './products-list-table.component';

describe('ProductsListTableComponent', () => {
  let component: ProductsListTableComponent;
  let fixture: ComponentFixture<ProductsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
