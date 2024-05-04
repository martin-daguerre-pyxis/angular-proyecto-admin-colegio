import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IAuth, IUser } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private MOCK_AUTH_USER: IUser = {
    id: 1,
    firstName: 'Martín',
    lastName: 'Daguerre Palombo',
    email: 'martin.daguerre@gmail.com',
    username: 'martindaguerre',
    password: '!Abc123',
    role: 'ADMIN',
    createdAt: new Date(),
  };

  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  public isAuthenticated(): boolean {
    return !!this._authUser$.value;
  }

  public getUserInfo(): Observable<IUser | null> {
    return this.authUser$;
  }

  constructor(private router: Router) { }

  login(data: IAuth): void {
    // console.log(data);
    // console.log(data.username);
    // console.log(data.password);
    if (data.username !== this.MOCK_AUTH_USER.email || data.password !== this.MOCK_AUTH_USER.password) {
      alert('Correo o password incorrectos');
    } else {
      this._authUser$.next(this.MOCK_AUTH_USER);
      localStorage.setItem(
        'accessToken',
        'coder@coderhouse.com:!coder53200@:j3k2h4g32hj4g231hj4g32g4jhgll09gf7a8dfdsfAVS'
      );
     // this.router.navigate(['dashboard', 'home']);
      this.router.navigate(['/dashboard/home']);
    }
  }

  verifyToken(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this._authUser$.next(this.MOCK_AUTH_USER);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('accessToken');
  }
}
