import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../../modules/api/api.service';
import { AuthService } from '../../../modules/firebase/auth.service';

function _doubleCheckEnteredPassword(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const mismatchingPasswords =
      formGroup.value.password !== formGroup.value.reenterPassword;

    return mismatchingPasswords
      ? {
          password: formGroup.value.password,
          reenterPassword: formGroup.value.reenterPassword,
        }
      : null;
  };
}

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css'],
})
export class CreateAccountFormComponent implements OnInit {
  createAccountForm: FormGroup;
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {
    this.createAccountForm = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required]),
        reenterPassword: new FormControl('', [Validators.required]),
      },
      [_doubleCheckEnteredPassword()]
    );
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.createAccountForm.valid) {
      const { user } = await this.auth.signUpWithEmailAndPassword({
        email: this.createAccountForm.value.email,
        password: this.createAccountForm.value.password,
      });

      if (user) {
        await this.api.post('/create-account', {
          email: this.createAccountForm.value.email,
        });

        await this.router.navigate(['/']);
      }
    }
  }
}
