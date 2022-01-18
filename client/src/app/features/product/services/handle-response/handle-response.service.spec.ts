import { TestBed } from '@angular/core/testing';

import { HandleResponseService } from './handle-response.service';

describe('HandleResponseService', () => {
  let service: HandleResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
