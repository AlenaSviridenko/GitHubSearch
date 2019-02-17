import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchListItemComponent } from './search-list-item.component';
import { MockSearchService } from '../services/mocks/search.service.mock';
import { SearchService } from '../services/search.service';
import { mocksData } from '../services/mocks/data.const.mock';

describe('SearchListItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgbModule
      ],
      providers: [
        { provide: SearchService, useClass: MockSearchService }
      ],
      declarations: [
        SearchListItemComponent
      ],
    }).compileComponents();
  }));

  it('should render component', () => {
    const fixture = TestBed.createComponent(SearchListItemComponent);
    expect(fixture.componentInstance.searchBranches).toBeDefined();
    expect(fixture.componentInstance.handleError).toBeDefined();
  });

  it('should search branches', async () => {
    const fixture = TestBed.createComponent(SearchListItemComponent);
    fixture.componentInstance.repo = mocksData.repositories[0];
    await fixture.componentInstance.searchBranches();
    const repo = fixture.componentInstance.repo;
    expect(repo.branches.length).toEqual(1);
  });
});
