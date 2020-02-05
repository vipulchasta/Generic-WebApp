import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { WebSiteData } from 'src/app/module/website/website.module';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {

  //baseurl = '/assets/data.json';

  baseurl = 'https://api.jsonbin.io/b/5e2e081f593fd7418570e3f3';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'secret-key': '$2a$10$Czs941C24iIp1xHGnweHN.6yQxfndYyrw3bZCQFQzM.COGSeDkdTi'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getNavbarData() {
    return this.httpClient.get(this.baseurl, this.httpOptions).pipe(
      map((data: WebSiteData) => {return data.navbar} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  getFooterData() {
    return this.httpClient.get(this.baseurl, this.httpOptions).pipe(
      map((data: WebSiteData) => {return data.footer} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  getHtmlPageData(pageId:string) {
    return this.httpClient.get(this.baseurl, this.httpOptions).pipe(
      map((data: WebSiteData) => {return data.htmlPages[pageId]} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  getAdminData(authKey : string) {
    var adminBaseurl : string = "https://shop.bulltronics.com/SrvHosting?id=5d3f4b82d1c7ae038bb112e4&operation=GET_ADMIN_DATA&key=" + authKey;
    return this.httpClient.get(adminBaseurl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getWebsiteData() {
    return this.httpClient.get(this.baseurl, this.httpOptions).pipe(
      map((data: WebSiteData) => {return data} ),
      retry(1),
      catchError(this.handleError)
    );
  }

  updateWebsiteData(websiteData: WebSiteData) {
    return this.httpClient.put(this.baseurl, websiteData, this.httpOptions).pipe(
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