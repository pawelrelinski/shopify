import { TestBed } from '@angular/core/testing';

import { FlyoutMenuService } from './flyout-menu.service';

describe('FlyoutMenusServiceService', () => {
  let service: FlyoutMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyoutMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
