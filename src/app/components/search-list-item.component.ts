import { Component, Input } from '@angular/core';

import { SearchListComponent } from './search-list.component';
import { IRepository } from '../interfaces';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'ghs-search-list-item',
  templateUrl: '../views/ghs-search-list-item.html'
})

export class SearchListItemComponent extends SearchListComponent {
  @Input() repo: IRepository;

  public loading: boolean;
  public error: string;

  constructor(
    private searchService: SearchService
  ) {
    super();
  }

  searchBranches() {
    this.loading = true;
    this.searchService.getBranches(this.repo.branchesUrl)
      .then((result) => {
        this.loading = false;
        this.repo.branches = result;
      })
      .catch((error) => this.handleError(error));
  }

  handleError(error) {
    this.loading = false;
    this.error = error;

    setTimeout(() => {
      this.error = '';
    }, 2000);
  }
}
