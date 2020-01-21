import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { WebSiteData } from 'src/app/module/website/website.module';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {

  baseurl = '/assets/data.json';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getNavbarData() {
    return this.httpClient.get(this.baseurl).pipe(
      map((data: WebSiteData) => {return data.navbar} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  getFooterData() {
    return this.httpClient.get(this.baseurl).pipe(
      map((data: WebSiteData) => {return data.footer} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  getHtmlPageData(pageId:string) {
    return this.httpClient.get(this.baseurl).pipe(
      map((data: WebSiteData) => {return data.htmlPages[pageId]} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}