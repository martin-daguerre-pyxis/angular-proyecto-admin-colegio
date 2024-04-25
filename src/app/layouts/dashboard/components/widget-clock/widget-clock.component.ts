import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-clock',
  templateUrl: './widget-clock.component.html',
  styleUrls: ['./widget-clock.component.scss']
})
export class WidgetClockComponent {

  title = 'Reloj';
  time: Date | undefined;
  hours: number | undefined;
  msg: string | undefined;
  link: string | undefined;

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.decide();
  }

  decide() {
    this.hours = new Date().getHours();
    if (this.hours < 10) {
      this.msg = "Buenos días";
      this.link = "https://aprende.com/escuela-gastronomica/cocina-internacional/";
    } else if (this.hours < 19) {
      this.msg = "Buenas tardes";
      this.link = "https://verne.elpais.com/verne/2015/08/04/articulo/1438683590_611299.html";
    } else if (this.hours < 24) {
      this.msg = "Buenas noches";
      this.link = "https://disneyplus.com/";
    } else if (this.hours < 6) {
      this.msg = "Es hora de dormir Tutor!";
      this.link = "https://netflix.com/";
    }
  }

}
