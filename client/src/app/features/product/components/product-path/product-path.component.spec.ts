import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPathComponent } from './product-path.component';

describe('ProductPathComponent', () => {
  let component: ProductPathComponent;
  let fixture: ComponentFixture<ProductPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
