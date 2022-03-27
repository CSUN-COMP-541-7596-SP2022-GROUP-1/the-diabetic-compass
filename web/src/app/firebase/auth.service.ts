import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { FirebaseModule } from './firebase.module';

@Injectable({
  providedIn: FirebaseModule,
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signIn(credentials: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  signOut() {
    return this.auth.signOut();
  }
}
