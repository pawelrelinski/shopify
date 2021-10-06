import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewPageComponent } from './product-overview-page.component';

describe('ProductOverviewPageComponent', () => {
  let component: ProductOverviewPageComponent;
  let fixture: ComponentFixture<ProductOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
