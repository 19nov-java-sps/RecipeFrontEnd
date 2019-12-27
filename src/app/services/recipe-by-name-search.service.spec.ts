import { TestBed } from '@angular/core/testing';

import { RecipeByNameSearchService } from './recipe-by-name-search.service';

describe('RecipeByNameSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeByNameSearchService = TestBed.get(RecipeByNameSearchService);
    expect(service).toBeTruthy();
  });
});
