import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { makeApiError } from 'src/lib/make-api-error';

import { FirebaseModule } from './firebase.module';

@Injectable({
  providedIn: FirebaseModule,
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.authState.pipe();
  }

  async signIn(credentials: { email: string; password: string }) {
    try {
      await this.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } catch (err: any) {
      throw makeApiError(422, 'Failed to sign into account', err);
    }
  }

  async signOut() {
    await this.auth.signOut();
  }

  async signUpWithEmailAndPassword(credentials: {
    email: string;
    password: string;
  }) {
    try {
      await this.auth.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        throw makeApiError(422, 'Email address already in use', err);
      }
      throw makeApiError(422, 'Failed to create an account', err);
    }
  }

  get currentUser() {
    return this.auth.currentUser;
  }
}
