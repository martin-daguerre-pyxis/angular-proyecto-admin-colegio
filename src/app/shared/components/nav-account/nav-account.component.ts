import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../../core/models';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html'
})
export class NavAccountComponent implements OnInit, OnDestroy  {
  showMenu = false;

  authUser$: Observable<IUser | null>;
  authUser: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnDestroy(): void {
    this.authUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.authUser = user;
      },
    });
  }
}
