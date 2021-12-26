import { TestBed } from '@angular/core/testing';

import { MobileMenuService } from './mobile-menu.service';

describe('MobileMenuService', () => {
  let service: MobileMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
