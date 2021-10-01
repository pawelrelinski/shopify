import { TestBed } from '@angular/core/testing';

import { ProductCategoriesService } from './product-categories.service';

describe('ProductCategoiresService', () => {
  let service: ProductCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
