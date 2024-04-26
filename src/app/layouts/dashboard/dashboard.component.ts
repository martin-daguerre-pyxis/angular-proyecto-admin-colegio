import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';

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

  constructor(public loadingService: LoadingService) { 
    this.loadingService.startLoading();
  }
  ngOnInit() {
    setTimeout(() => {
      this.loadingService.stopLoading();
    }, 1000);
  }
}
