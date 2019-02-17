import { TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { TEST_SEARCH_TERM, TEST_URL, mocksData } from './mocks/data.const.mock';

describe('ApiService', () => {
  let injector: Injector;
  let apiService: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ApiService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    injector = getTestBed();
    apiService = injector.get(ApiService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should have a public API', () => {
    expect(apiService.getWithEndpoint).toBeDefined();
    expect(apiService.get).toBeDefined();
  });

  it('should get data by URL', async () => {
    const testData = mocksData.branches;
    apiService.get(TEST_URL)
      .subscribe((data) =>
        expect(data).toEqual(testData)
      );
    const req = httpTestingController.expectOne(TEST_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });

  it('should get data from correct endpoint', async () => {
    const testData = mocksData.repositoriesFromServer;
    apiService.getWithEndpoint('/test', TEST_SEARCH_TERM)
      .subscribe((data) =>
        expect(data).toEqual(testData)
      );
    const req = httpTestingController.expectOne('https://api.github.com/test?q=' + TEST_SEARCH_TERM);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
