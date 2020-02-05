import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { WebSiteData } from 'src/app/module/website/website.module';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-website',
  templateUrl: './manage-website.component.html',
  styleUrls: ['./manage-website.component.css']
})
export class ManageWebsiteComponent implements OnInit {

  websiteData: WebSiteData = new WebSiteData();
  error = "";

  constructor(private dataRetrievalService: DataRetrievalService, private spinner: NgxSpinnerService, private titleService: Title,) { }

  ngOnInit() {
    this.titleService.setTitle("Manage Pages");
    this.spinner.show();

    this.dataRetrievalService.getWebsiteData().subscribe((data)=>{
      this.websiteData = data;
      this.spinner.hide();
    },(error) =>{
      this.error = error;
      console.log(error);
      this.spinner.hide();
    });

  }

}
