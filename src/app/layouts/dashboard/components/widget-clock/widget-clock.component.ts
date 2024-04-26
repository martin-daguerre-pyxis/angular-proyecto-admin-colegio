import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-clock',
  templateUrl: './widget-clock.component.html',
  styleUrls: ['./widget-clock.component.scss']
})
export class WidgetClockComponent implements OnInit {

  title = 'Reloj';
  time: Date | undefined;
  hours: number | undefined;
  msg: string | undefined;
  link: string | undefined;

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
    
  }

  ngOnInit() {
    this.decide();
  }


  decide() {
    this.hours = new Date().getHours();
    if (this.hours < 10) {
      this.msg = "Buenos días";
      this.link = "https://codepen.io/ste-vg/pen/MWpxKYR";
    } else if (this.hours < 19) {
      this.msg = "Buenas tardes";
      this.link = "https://codepen.io/ste-vg/pen/qBQVGEG";
    } else if (this.hours < 24) {
      this.msg = "Buenas noches";
      this.link = "https://codepen.io/ste-vg/pen/BazEQbY";
    } else if (this.hours < 6) {
      this.msg = "Es hora de dormir Tutor!";
      this.link = "https://codepen.io/ste-vg/pen/rNjOgYv";
    }
  }

}
