import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { 
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['dashboard', 'home']);
    }
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('martin.daguerre@gmail.com', Validators.required),
    password: new FormControl('!Abc123', [Validators.required, Validators.minLength(6)] ),
  });

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }


}
