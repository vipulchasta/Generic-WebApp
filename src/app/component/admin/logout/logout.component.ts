import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication/user-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dataRetrievalService: DataRetrievalService, private spinner: NgxSpinnerService, private titleService: Title, private router : Router, private userAuthenticationService: UserAuthenticationService) {
    titleService.setTitle("Logout || Admin Dashboard");

    if(userAuthenticationService.isUserLoggedIn() == true) {
      userAuthenticationService.makeUserLoggedOut();
    }

    this.router.navigate(['/']);
  }
  

  ngOnInit() {
  }

}
