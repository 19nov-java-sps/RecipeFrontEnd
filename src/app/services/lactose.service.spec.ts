import { TestBed } from '@angular/core/testing';

import { LactoseService } from './lactose.service';

describe('LactoseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LactoseService = TestBed.get(LactoseService);
    expect(service).toBeTruthy();
  });
});
