import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../firebase/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private auth: AuthService) {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  handleSubmitSignInForm() {
    const { email, password } = this.signInForm.value;
    this.auth.signIn({ email, password });
  }
}
