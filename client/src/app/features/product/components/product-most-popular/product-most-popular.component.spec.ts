import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMostPopularComponent } from './product-most-popular.component';

describe('ProductMostPopularComponent', () => {
  let component: ProductMostPopularComponent;
  let fixture: ComponentFixture<ProductMostPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductMostPopularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
