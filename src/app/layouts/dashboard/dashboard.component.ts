import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options = {
    bottom: 0,
    scrollbars: true,
    fixed: false,
    top: 0,
    opened: true,
    backdrop: true,
  };
  constructor() { }

  ngOnInit() {
  }

}
