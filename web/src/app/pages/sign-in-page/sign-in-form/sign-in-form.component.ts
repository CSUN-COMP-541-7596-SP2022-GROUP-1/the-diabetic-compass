import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../modules/firebase/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private auth: AuthService) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signInForm);

    this.auth.signIn({
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    });
  }
}
