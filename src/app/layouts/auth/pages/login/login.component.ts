import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../../../core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   user:IUser = {
    id: 1,
    firstName: 'Martín',
    lastName: 'Daguerre Palombo',
    email: 'martin.daguerre@gmail.com',
    username: 'martindaguerre',
    password: '!Abc123',
    role: 'ADMIN',
    createdAt: new Date(),
  };

  form: FormGroup = new FormGroup({
    username: new FormControl('Admin', Validators.required),
    password: new FormControl('!Abc123', [Validators.required, Validators.minLength(6)] ),
  });

  submit() {
    if (this.form.valid) {
      const userString = JSON.stringify(this.user); 
      localStorage.setItem('user', userString); 
      localStorage.setItem('token', 'Bearer !Abc123789');
      this.router.navigate(['dashboard', 'home']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  constructor(private router: Router) { }

}
