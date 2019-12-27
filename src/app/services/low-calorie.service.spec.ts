import { TestBed } from '@angular/core/testing';

import { LowCalorieService } from './low-calorie.service';

describe('LowCalorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LowCalorieService = TestBed.get(LowCalorieService);
    expect(service).toBeTruthy();
  });
});
