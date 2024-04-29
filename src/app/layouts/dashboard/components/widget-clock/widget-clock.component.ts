import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widget-clock',
  templateUrl: './widget-clock.component.html',
  styleUrls: ['./widget-clock.component.scss']
})
export class WidgetClockComponent implements OnInit {

  title = 'Reloj';
  time: Date | undefined;
  hours: number | undefined;
  msg?: Observable<string | undefined>;
  link: string | undefined;
  earlyMorning: string | undefined;
  morning: string | undefined;
  afternoon: string | undefined;
  evening: string | undefined;

  constructor(private translate: TranslateService) {
    setInterval(() => {
      this.time = new Date();
      this.translate.get('widgets.clock.morning').subscribe((value: any) => {
        this.decide();
      });
    }, 1000);
    
  }

  ngOnInit() {
    this.decide();
  }


  decide() {
    this.hours = new Date().getHours();
    if (this.hours < 10) {
      this.translate.get('widgets.clock.morning').subscribe((value: any) => {
        this.msg = value;
      });
      this.link = "https://codepen.io/ste-vg/pen/MWpxKYR";
    } else if (this.hours < 14) {
      this.translate.get('widgets.clock.afternoon').subscribe((value: any) => {
        this.msg = value;
      });
      this.link = "https://codepen.io/ste-vg/pen/qBQVGEG";
    } else if (this.hours < 24) {
      this.translate.get('widgets.clock.evening').subscribe((value: any) => {
        this.msg = value;
      });
      this.link = "https://codepen.io/ste-vg/pen/BazEQbY";
    } else if (this.hours < 6) {
      this.translate.get('widgets.clock.earlyMorning').subscribe((value: any) => {
        this.msg = value;
      });
      this.link = "https://codepen.io/ste-vg/pen/rNjOgYv";
    }
  }

}
