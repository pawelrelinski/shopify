import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListTableActionsComponent } from './products-list-table-actions.component';

describe('ProductsListTableActionsComponent', () => {
  let component: ProductsListTableActionsComponent;
  let fixture: ComponentFixture<ProductsListTableActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListTableActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListTableActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
