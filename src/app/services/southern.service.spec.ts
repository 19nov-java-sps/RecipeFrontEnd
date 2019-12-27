import { TestBed } from '@angular/core/testing';

import { SouthernService } from './southern.service';

describe('SouthernService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SouthernService = TestBed.get(SouthernService);
    expect(service).toBeTruthy();
  });
});
