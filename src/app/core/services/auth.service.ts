import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  public currentUser: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {

    this.afAuth.auth.onAuthStateChanged(function (user) {
      this.currentUser = user;
    });
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // You can add additional scopes to the provider:
    provider.addScope('email');
    // Sign in with redirect:
    this.afAuth.auth.signInWithRedirect(provider);
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    // You can add additional scopes to the provider:
    provider.addScope('email');
    // Sign in with redirect:
    this.afAuth.auth.signInWithRedirect(provider);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createUserWithEmailAndPassword(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
