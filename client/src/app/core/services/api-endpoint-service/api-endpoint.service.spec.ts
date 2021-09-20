import { TestBed } from '@angular/core/testing';

import { ApiEndpointService } from './api-endpoint.service';

describe('ApiEndpointService', () => {
  let service: ApiEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
