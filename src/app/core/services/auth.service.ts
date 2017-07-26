import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";


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
    var provider = new firebase.auth.GoogleAuthProvider();
    // You can add additional scopes to the provider:
    provider.addScope('email');
    // Sign in with redirect:
    this.afAuth.auth.signInWithRedirect(provider);
  }

  loginWithFacebook(){    
    var provider = new firebase.auth.FacebookAuthProvider();
    // You can add additional scopes to the provider:
    provider.addScope('email');
    // Sign in with redirect:
    this.afAuth.auth.signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
