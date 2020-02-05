import { Component, OnInit } from '@angular/core';

import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { SocialLinks, NavBar, WebSiteData } from 'src/app/module/website/website.module';
import { UserAuthenticationService } from 'src/app/service/user-authentication/user-authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  socialLinks : SocialLinks = new SocialLinks();
  navbar : NavBar = new NavBar();
  error = "";

  isUserLoggedIn : boolean;

  constructor(private dataRetrivalService : DataRetrievalService, private userAuthenticationService : UserAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.userAuthenticationService.isUserLoggedIn();

    this.dataRetrivalService.getNavbarData().subscribe((data)=>{
      this.navbar = data;
      this.socialLinks = this.navbar.socialLinks;

      if(this.isUserLoggedIn == true) {
        this.navbar.navigationLinks = [
                {
                  "title": "Home",
                  "link": "/admin"
                },
                {
                  "title": "Manage",
                  "link": "/admin/manage"
                },
                {
                  "title": "View Logs",
                  "link": "/admin/logs"
                },
                {
                  "title": "Logout",
                  "link": "/logout"
                }
          ];
      }

    },(error) =>{
      this.error = error;
      console.log(error);
    });

    

  }

}