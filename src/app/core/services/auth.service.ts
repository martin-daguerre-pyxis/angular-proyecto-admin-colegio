import { Injectable } from '@angular/core';
import { IUser } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

authUser$: Observable<IUser> | undefined;

}
