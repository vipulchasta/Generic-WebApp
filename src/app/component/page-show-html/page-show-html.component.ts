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
            this.onActivate();
          } );
  }

  ngOnInit() {
  }

  onActivate() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
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
      setTimeout(() => {
        /** spinner ends after 500 m-seconds */
        this.spinner.hide();
      }, 800);
      
    },(error) =>{
      this.error = error;
      console.log(error);
    });
  
  }

}
