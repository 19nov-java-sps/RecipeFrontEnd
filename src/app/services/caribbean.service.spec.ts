import { TestBed } from '@angular/core/testing';

import { CaribbeanService } from './caribbean.service';

describe('CaribbeanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaribbeanService = TestBed.get(CaribbeanService);
    expect(service).toBeTruthy();
  });
});
