import { Component } from '@angular/core';

import { SearchService } from '../services/search.service';
import {IRepository} from '../interfaces';

@Component({
  selector: 'ghs-search-box',
  templateUrl: '../views/ghs-search-box.html'
})

export class SearchBoxComponent {

  public searchTerm: string;
  public loading: boolean;
  public repositoriesList: IRepository[] = [];

  constructor(
    private searchService: SearchService
  ) {}

  onKey(e) {
    this.searchTerm = e.target.value;

    if (!this.searchTerm) {
      this.repositoriesList = [];
    }
  }

  searchRepos() {
    this.toggleLoading();
    this.repositoriesList = [];

    this.searchService.searchRepositories(this.searchTerm)
      .then((result) => {
        this.toggleLoading();
        this.repositoriesList = result;
      })
      .catch((error) => {

      });
  }

  searchBranches({ url, i }) {
    this.searchService.getBranches(url)
      .then((result) => {
        this.repositoriesList = [
          ...this.repositoriesList,
           this.repositoriesList.map((repo, index) => {
            if (index === i) {
              repo.branches = result;
            }

            return repo;
          })
        ] as IRepository[];
      });
  }

  toggleLoading() {
    this.loading = !this.loading;
  }
}
