import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  data = {
    "counterList" : [
      {
        "title" : "Clients",
        "counter" : 274
      },
      {
        "title" : "Projects",
        "counter" : 420
      },
      {
        "title" : "Hours Of Support",
        "counter" : 1365
      },
      {
        "title" : "Hard Workers",
        "counter" : 20
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });
  }

}
