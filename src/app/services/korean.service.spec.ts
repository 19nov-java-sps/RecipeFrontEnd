import { TestBed } from '@angular/core/testing';

import { KoreanService } from './korean.service';

describe('KoreanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoreanService = TestBed.get(KoreanService);
    expect(service).toBeTruthy();
  });
});
