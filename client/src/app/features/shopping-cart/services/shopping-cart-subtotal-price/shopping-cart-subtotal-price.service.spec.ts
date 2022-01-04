import { TestBed } from '@angular/core/testing';

import { ShoppingCartSubtotalPriceService } from './shopping-cart-subtotal-price.service';

describe('ShoppingCartSubtotalPriceService', () => {
  let service: ShoppingCartSubtotalPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartSubtotalPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
