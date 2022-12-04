import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Authentication } from 'src/services/authentication';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public auth: Authentication, private FB: FormBuilder) {}

  authForm = this.FB.group({
    email: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  submitForm() {
    this.auth.login(this.authForm.value);
  }
}
