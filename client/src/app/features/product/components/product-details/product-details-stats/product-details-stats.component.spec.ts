import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsStatsComponent } from './product-details-stats.component';

describe('ProductDetailsStatsComponent', () => {
  let component: ProductDetailsStatsComponent;
  let fixture: ComponentFixture<ProductDetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsStatsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
