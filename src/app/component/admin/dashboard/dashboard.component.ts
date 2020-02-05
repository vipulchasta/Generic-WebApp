import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication/user-authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private titleService: Title, private router : Router, private userAuthenticationService: UserAuthenticationService) {

    titleService.setTitle("Dashboard");
    if(userAuthenticationService.isUserLoggedIn() == false) {
      this.router.navigate(['/login']);
      return;
    }

  }

  ngOnInit() {
  }

}
