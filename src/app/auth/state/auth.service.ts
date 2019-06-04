import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { auth } from 'firebase';

import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: AuthStore,
    private router: Router
  ) {
    const storedAuth = localStorage.getItem('auth');

    if (storedAuth) {
      this.store.update(JSON.parse(storedAuth));
    }
  }

  googleSignIn = async () => {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    return this.updateUserData(credential.user);
  };

  signOut = async () => {
    this.store.reset();
    localStorage.removeItem('auth');
    await this.afAuth.auth.signOut();
    this.router.navigate(['']);
  };

  private updateUserData = ({ uid, email, displayName, photoURL }: Auth) => {
    const userRef: AngularFirestoreDocument<Auth> = this.afs.doc(`users/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    this.store.update(data);
    localStorage.setItem('auth', JSON.stringify(data));

    return userRef.set(data, { merge: true });
  };
}
