import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiModule } from './api.module';
import { AuthService } from '../firebase/auth.service';

interface ApiGetOptions {
  headers?: { [header: string]: string };
}

interface ApiPostOptions {
  headers?: { [header: string]: string };
  body?: {};
}

@Injectable({
  providedIn: ApiModule,
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private firebaseAuthService: AuthService
  ) {}

  get(url: string, options: ApiGetOptions) {}

  post(url: string, options: ApiPostOptions) {}
}
