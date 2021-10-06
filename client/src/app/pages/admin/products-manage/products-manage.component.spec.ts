import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManageComponent } from './products-manage.component';

describe('ProductsManageComponent', () => {
  let component: ProductsManageComponent;
  let fixture: ComponentFixture<ProductsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
