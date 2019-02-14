import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box.component';
import { SearchListComponent } from './components/search-list.component';
import { SearchListItemComponent } from './components/search-list-item.component';

import { SearchService } from './services/search.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchListComponent,
    SearchListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    SearchService,
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
