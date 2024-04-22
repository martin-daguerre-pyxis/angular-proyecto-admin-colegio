import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage';
import { Observable, of } from 'rxjs';
import { IUser } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userInfo!: Observable<IUser>;

  constructor(private router: Router, private localStorage: LocalstorageService) {
    if (this.localStorage.getItem('token') && this.localStorage.getItem('user')) {
      const user = JSON.parse(this.localStorage.getItem('user') ?? '');
      this.userInfo = of(user);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  getUserInfo(): Observable<IUser> {
    return this.userInfo;
  }
}
