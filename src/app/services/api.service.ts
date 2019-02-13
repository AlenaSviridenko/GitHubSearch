import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private httpOptions = {};
  private apiUrl = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getWithEndpoint(endPoint: string, searchTerm: string) {
    return this.http.get(this.createUrlWithRequest(endPoint, searchTerm), this.httpOptions);
  }

  public get(url: string) {
    return this.http.get(url, this.httpOptions);
  }

  private createUrl(endPoint: string): string {
    return this.apiUrl + endPoint;
  }

  private createUrlWithRequest(endPoint: string, searchTerm: string): string {
    return this.createUrl(endPoint) + `?q=${searchTerm}`;
  }

}
