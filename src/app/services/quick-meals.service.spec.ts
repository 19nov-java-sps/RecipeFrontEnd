import { TestBed } from '@angular/core/testing';

import { QuickMealsService } from './quick-meals.service';

describe('QuickMealsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickMealsService = TestBed.get(QuickMealsService);
    expect(service).toBeTruthy();
  });
});
