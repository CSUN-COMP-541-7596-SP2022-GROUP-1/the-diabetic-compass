import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

import { FirebaseModule } from './firebase.module';

@Injectable({
  providedIn: FirebaseModule,
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.authState.pipe();
  }

  signIn(credentials: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signOut() {
    return this.auth.signOut();
  }

  signUpWithEmailAndPassword(credentials: { email: string; password: string }) {
    return this.auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  get currentUser() {
    return this.auth.currentUser;
  }
}
