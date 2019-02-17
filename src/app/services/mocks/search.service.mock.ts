import { mocksData } from './data.const.mock';

export class MockSearchService {
  searchRepositories(searchTerm: string) {
    return new Promise((resolve, reject) => {
        resolve(mocksData.repositories);
    });
  }

  getBranches(url: string) {
    return new Promise((resolve, reject) => {
      resolve(mocksData.branches);
    });
  }
}
