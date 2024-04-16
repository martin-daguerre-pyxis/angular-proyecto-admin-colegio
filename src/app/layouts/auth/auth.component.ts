import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl('Admin'),
    password: new FormControl('123456'),
  });

  submit() {
    if (this.form.valid) {
      this.router.navigate(['/dashboard'])
    }
  }
  @Input()
  error!: string | null;

  constructor(private router: Router) { }


}
