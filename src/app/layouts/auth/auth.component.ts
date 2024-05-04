import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../shared/services/localstorage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, localStorage: LocalstorageService) { }

  ngOnInit(): void {

    this.router.navigate(['/auth/login']);

    if (localStorage.getItem('accessToken') !== null) {
      console.log('Usuario Logueado');
      this.router.navigate(['/dashboard/home']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
