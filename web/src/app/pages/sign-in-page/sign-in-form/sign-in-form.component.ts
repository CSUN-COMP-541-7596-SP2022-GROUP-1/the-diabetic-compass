import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../modules/firebase/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;

  showSpinner = false;
  constructor(private auth: AuthService, private router: Router) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    this.showSpinner = true;

    await this.auth.signIn({
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    });

    this.showSpinner = false;

    await this.router.navigate(['/']);
  }
}
