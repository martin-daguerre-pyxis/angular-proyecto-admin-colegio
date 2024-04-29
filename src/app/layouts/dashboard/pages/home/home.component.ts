import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time: Date | undefined;
  hour: number | undefined;
  minute: number | undefined;
  second: number | undefined;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.second = this.time.getSeconds();
    }, 1000);
  }

}
