import { TestBed } from '@angular/core/testing';

import { FpRepositoryServiceService } from './fp-repository-service.service';

describe('FpRepositoryServiceService', () => {
  let service: FpRepositoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpRepositoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
