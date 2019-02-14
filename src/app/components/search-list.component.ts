import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { IRepository } from '../interfaces';
import { BehaviorSubject } from 'rxjs/index';

@Component({
  selector: 'ghs-search-list',
  templateUrl: '../views/ghs-search-list.html'
})

export class SearchListComponent implements OnInit, OnDestroy {
  public repoSubscriber = new BehaviorSubject<IRepository[]>([]);
  public repoList: IRepository[];

  constructor() {}

  @Input()
  set list(data: any) {
    this.repoSubscriber.next(data);
  }

  ngOnInit() {
    this.repoSubscriber
      .subscribe(x => {
        this.repoList = x;
      });
  }

  ngOnDestroy() {
    this.repoSubscriber.unsubscribe();
  }
}
