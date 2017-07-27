import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { AuthService } from 'app/core/services/auth.service';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  loginFailedMessage: string;
  private account: FormGroup;

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) { }

  ngOnInit() {
    this.account = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  signInWithEmailAndPassword($event) {
    $event.preventDefault();

    this.loginFailedMessage = null;

    this.authService.signInWithEmailAndPassword(this.account.value.email, this.account.value.password)
      .catch((error: FirebaseError) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.loginFailedMessage = 'The email address is not valid.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          case 'auth/user-disabled':
            this.loginFailedMessage = 'The user corresponding to the given email has been disabled.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          case 'auth/user-not-found':
            // TODO go to register
             this.loginFailedMessage = 'There is no user corresponding to the given email.';
            break;
          case 'auth/wrong-password':
            this.loginFailedMessage = 'The password is invalid for the given email.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          default:
            this.loginFailedMessage = 'Login failed.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
        }
      });
  }

  logout() {
    this.authService.logout();
  }

}

