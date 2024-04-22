import { Component } from '@angular/core';
import { LocalstorageService } from '../../../../shared/services/localstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router,private localStorage: LocalstorageService) { 
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('user');
    this.router.navigate(['auth', 'login']);
  }

}
