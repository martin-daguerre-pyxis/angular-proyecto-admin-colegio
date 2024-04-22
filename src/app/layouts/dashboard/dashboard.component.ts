import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
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
  isLoading = true; // Simular loading de datos

  constructor() { }

  ngOnInit() {
    // Simular loading de datos
    this.simulateLoading();
  }

  private simulateLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }

}
