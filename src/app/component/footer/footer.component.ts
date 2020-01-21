import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { SocialLinks, Footer, WebsiteContact } from 'src/app/module/website/website.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  socialLinks : SocialLinks = new SocialLinks();
  footer : Footer = new Footer();
  websiteContact : WebsiteContact = new WebsiteContact();
  error = "";

  constructor(private dataRetrivalService : DataRetrievalService) { }

  ngOnInit() {
    this.dataRetrivalService.getFooterData().subscribe((data)=>{
      this.footer = data;
      this.socialLinks = this.footer.socialLinks;
      this.websiteContact = this.footer.contact;
    },(error) =>{
      this.error = error;
      console.log(error);
    });
  }

}