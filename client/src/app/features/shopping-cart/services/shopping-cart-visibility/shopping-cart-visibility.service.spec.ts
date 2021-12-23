import { TestBed } from '@angular/core/testing';

import { ShoppingCartVisibilityService } from './shopping-cart-visibility.service';

describe('ShoppingCartVisibilityService', () => {
  let service: ShoppingCartVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
