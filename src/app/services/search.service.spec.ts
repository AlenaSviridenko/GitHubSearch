import { TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';

import { MockApiService } from './mocks/api.service.mock';
import { SearchService } from './search.service';
import { ApiService } from './api.service';
import { TEST_SEARCH_TERM, TEST_NAME, TEST_URL } from './mocks/data.const.mock';


describe('SearchService', () => {
  let injector: Injector;
  let searchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useClass: MockApiService },
        SearchService
      ]
    });

    injector = getTestBed();
    searchService = injector.get(SearchService);
  });

  it('should have a public API', () => {
    expect(searchService.searchRepositories).toBeDefined();
    expect(searchService.getBranches).toBeDefined();
  });

  it('should be able to get repositories by search term', async () => {
    const result = await searchService.searchRepositories(TEST_SEARCH_TERM);
    expect(result[0].name).toBe(TEST_NAME);
  });

  it('should be able to get branches by url', async () => {
    const result = await searchService.getBranches(TEST_URL);
    expect(result[0]).toBe(TEST_NAME);
  });
});
