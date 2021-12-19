import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryPageComponent } from './products-category-page.component';

describe('ProductsCategoryPageComponent', () => {
  let component: ProductsCategoryPageComponent;
  let fixture: ComponentFixture<ProductsCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
