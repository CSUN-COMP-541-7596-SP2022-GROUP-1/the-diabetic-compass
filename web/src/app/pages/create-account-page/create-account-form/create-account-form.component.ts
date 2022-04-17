import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

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
  constructor() {
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

  onSubmit() {
    console.log(this.createAccountForm);
  }
}
