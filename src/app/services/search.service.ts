import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { IRepository} from '../interfaces';

@Injectable()
export class SearchService {

  constructor(
    private apiService: ApiService
  ) {}

  public searchRepositories(searchTerm: string): Promise<any> {
    return this.promise(
      this.apiService.getWithEndpoint('/search/repositories', searchTerm),
      (result, resolve, reject) => {
        if (result.total_count === 0) {
          reject('No repositories found');
        }

        resolve(this.mapRepositories(result.items));
      }
    );
  }

  public getBranches(url: string) {
    return this.promise(
      this.apiService.get(url),
      (result, resolve, reject) => {
        if (result.total_count === 0) {
          reject('No repositories found');
        }

        resolve(result.map((branch) => branch.name));
      }
    );
  }

  private promise(method, resultHandler): Promise<any> {
    return new Promise((resolve, reject) => {
      method
        .subscribe((result) => {
          if (result) {
            resultHandler(result, resolve, reject);
          } else {
            reject('Error getting data');
          }
        });
    });
  }

  private mapRepositories(response): IRepository[] {
    return response.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        ownerAvatar: repo.owner.avatar_url,
        branchesUrl: repo.branches_url.replace('{/branch}', ''),
        branches: [],
        description: repo.description
      };
    });
  }
}
