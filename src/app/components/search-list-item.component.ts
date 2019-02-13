import {Component, EventEmitter, Input, Output } from '@angular/core';

import { SearchListComponent } from './search-list.component';
import { IRepository } from '../interfaces';

@Component({
  selector: 'ghs-search-list-item',
  templateUrl: '../views/ghs-search-list-item.html'
})

export class SearchListItemComponent extends SearchListComponent {
  @Input() index: number;
  @Input() repo: IRepository;
  @Output() findBranches = new EventEmitter<any>();

  public loading: boolean;

  constructor() {
    super();
    this.loading = false;
  }

  getBranches() {
    this.loading = true;
    this.findBranches.emit({url: this.repo.branchesUrl, i: this.index});
  }
}
