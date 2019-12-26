import { TestBed } from '@angular/core/testing';

import { VegetarianService } from './vegetarian.service';

describe('VegetarianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VegetarianService = TestBed.get(VegetarianService);
    expect(service).toBeTruthy();
  });
});
