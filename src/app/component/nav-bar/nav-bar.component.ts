import { Component, OnInit } from '@angular/core';

import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { SocialLinks, NavBar, WebSiteData } from 'src/app/module/website/website.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  socialLinks : SocialLinks = new SocialLinks();
  navbar : NavBar = new NavBar();
  error = "";

  constructor(private dataRetrivalService : DataRetrievalService) { }

  ngOnInit() {
    this.dataRetrivalService.getNavbarData().subscribe((data)=>{
      this.navbar = data;
      this.socialLinks = this.navbar.socialLinks;
    },(error) =>{
      this.error = error;
      console.log(error);
    });
  }

}