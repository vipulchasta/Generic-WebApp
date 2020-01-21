import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

import { DataRetrievalService } from '../../service/data-retrieval/data-retrieval.service';
import { WebSiteData, WebsitePage } from 'src/app/module/website/website.module';

@Component({
  selector: 'app-page-show-html',
  templateUrl: './page-show-html.component.html',
  styleUrls: ['./page-show-html.component.css']
})
export class PageShowHTMLComponent implements OnInit {

  pageId = "";
  pageData : WebsitePage = new WebsitePage();
  error = "";

  constructor(private spinner: NgxSpinnerService, private titleService: Title, private route: ActivatedRoute, private router : Router, private dataRetrievalService: DataRetrievalService) {
    this.route.params.subscribe( params => {
            this.spinner.show();
            console.log(params);
            this.pageId = params["pageId"];
            this.renderViewPage();
          } );
  }

  ngOnInit() {
  }

  renderViewPage() {

    this.dataRetrievalService.getHtmlPageData(this.pageId).subscribe((data)=>{
      this.pageData = data;

      if(this.pageData == null) {
        this.spinner.hide();
        this.router.navigate(['/404']);
        return;
      }

      this.titleService.setTitle(this.pageData.title);
      this.spinner.hide();
      
    },(error) =>{
      this.error = error;
      console.log(error);
    });
  
  }

}
