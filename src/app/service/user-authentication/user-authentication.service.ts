import { Injectable } from '@angular/core';
import { DataRetrievalService } from '../data-retrieval/data-retrieval.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  public userLoginStatus: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([]);

  error : string = "";
  constructor(private dataRetrievalService: DataRetrievalService) { }

  isUserLoggedIn () : boolean {
    var token = localStorage.getItem('authenticationToken');

    if(token == null) {
      console.log("No Token Available");
      return false;
    } else {
      console.log("Token is: " + token);
      return true;
    }
    
  }

  makeUserLoggedIn (token : string) {
    localStorage.setItem('authenticationToken', token);
  }
  makeUserLoggedOut () {
    localStorage.removeItem('authenticationToken');
  }

}
