import { of } from 'rxjs';

import { mocksData } from './data.const.mock';

export class MockApiService {

  public getWithEndpoint(endPoint: string, searchTerm: string) {
    return of(mocksData.repositoriesFromServer);
  }

  public get(url: string) {
    return of(mocksData.branches);
  }
}
