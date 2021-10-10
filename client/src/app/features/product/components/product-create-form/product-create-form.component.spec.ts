import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateFormComponent } from './product-create-form.component';

describe('ProductCreateFormComponent', () => {
  let component: ProductCreateFormComponent;
  let fixture: ComponentFixture<ProductCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
