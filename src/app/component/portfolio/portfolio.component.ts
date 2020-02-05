import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() data: any;
  
  constructor(private spinner: NgxSpinnerService, private titleService: Title) {
    this.spinner.show();
  }

  ngOnInit() {
    this.titleService.setTitle("Portfolio || BullTronics");

    setTimeout(() => {
      /** spinner ends after 500 m-seconds */
      this.spinner.hide();
    }, 500);
  }

}
