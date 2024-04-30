import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models';
@Injectable({ providedIn: 'root' })
export class AuthService {
  
  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  public isAuthenticated(): boolean{
    return !!this._authUser$.value;
  }

  login(): void {
    this._authUser$.next({
      id: 1,
      firstName: 'Martín',
      lastName: 'Daguerre Palombo',
      email: 'email@mail.com',
      username: 'martindaguerre',
      password: '!Abc123',
      role: 'ADMIN',
      createdAt: new Date(),
    });
  }

  logout(): void {
    this._authUser$.next(null);
  }
}
