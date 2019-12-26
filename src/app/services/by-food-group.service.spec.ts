import { TestBed } from '@angular/core/testing';

import { ByFoodGroupService } from './by-food-group.service';

describe('ByFoodGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ByFoodGroupService = TestBed.get(ByFoodGroupService);
    expect(service).toBeTruthy();
  });
});
