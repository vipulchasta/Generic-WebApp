import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
