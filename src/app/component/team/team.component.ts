import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

import { DataRetrievalService } from '../../service/data-retrieval/data-retrieval.service';

@Component({
  selector: 'app-page-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  TeamMembers : any = {};
  defaultImage = '/assets/img/loading.gif';

  constructor(private spinner: NgxSpinnerService, private titleService: Title, private route: ActivatedRoute, private dataRetrievalService: DataRetrievalService) {
    this.spinner.show();
    this.titleService.setTitle("Team || BullTronics");
  }

  ngOnInit() {
    //this.TeamMembers = this.dataRetrievalService.getTeam();
    
    setTimeout(() => {
      /** spinner ends after 500 m-seconds */
      this.spinner.hide();
    }, 500);
  }

}
