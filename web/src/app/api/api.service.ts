import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiModule } from './api.module';
import { AuthService } from '../firebase/auth.service';

@Injectable({
  providedIn: ApiModule,
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private firebaseAuthService: AuthService
  ) {}

  signIn() {}

  signOut() {
    return this.firebaseAuthService.signOut();
  }
}
