import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
