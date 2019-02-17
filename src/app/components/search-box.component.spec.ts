import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchBoxComponent } from './search-box.component';
import { SearchListComponent } from './search-list.component';
import { SearchListItemComponent } from './search-list-item.component';
import { MockSearchService } from '../services/mocks/search.service.mock';
import { SearchService } from '../services/search.service';
import { TEST_NAME } from '../services/mocks/data.const.mock';

describe('SearchBoxComponent', () => {
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
        SearchBoxComponent,
        SearchListComponent,
        SearchListItemComponent
      ],
    }).compileComponents();
  }));

  it('should render component', () => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    expect(fixture.componentInstance.onKey).toBeDefined();
    expect(fixture.componentInstance.searchRepos).toBeDefined();
  });

  it('should update searchTerm', () => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    fixture.componentInstance.onKey({ target: { value: TEST_NAME }});
    const searchTerm = fixture.componentInstance.searchTerm;
    expect(searchTerm).toEqual(TEST_NAME);
  });

  it(`should search repositories'`, async () => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    fixture.componentInstance.onKey({ target: { value: TEST_NAME }});
    await fixture.componentInstance.searchRepos();
    expect(fixture.componentInstance.repositoriesList.length).toEqual(1);
  });
});
