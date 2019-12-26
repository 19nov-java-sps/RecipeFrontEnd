import { TestBed } from '@angular/core/testing';

import { PescatarianService } from './pescatarian.service';

describe('PescatarianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PescatarianService = TestBed.get(PescatarianService);
    expect(service).toBeTruthy();
  });
});
