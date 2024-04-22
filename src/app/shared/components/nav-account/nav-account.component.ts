import { Component } from '@angular/core';
import { UserInfoService } from '../../services/auth/user-info.service';
import { IUser } from '../../../core/models';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html'
})
export class NavAccountComponent {
  user?: IUser;

  constructor(private authUser: UserInfoService) {
    this.authUser.getUserInfo().subscribe(user => { // Add missing closing parenthesis
      this.user = user;
    });
  }
}
