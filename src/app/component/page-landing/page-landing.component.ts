import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private titleService: Title) { }

  ngOnInit() {
    this.spinner.show();
    this.titleService.setTitle("BullTronics");

    setTimeout(() => {
      /** spinner ends after 500 m-seconds */
      this.spinner.hide();
    }, 700);
  }

}
