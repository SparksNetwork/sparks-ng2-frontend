import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder, private route: ActivatedRoute) { }

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

    this.authService.signInWithEmailAndPassword(this.account.value.email, this.account.value.password).then(user => {
      const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') || 'dashboard';
      this.router.navigate([redirectTo]);
    })
      .catch((error: FirebaseError) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.loginFailedMessage = 'The email address is not valid.';
            break;
          case 'auth/user-disabled':
            this.loginFailedMessage = 'The user corresponding to the given email has been disabled.';
            break;
          case 'auth/user-not-found':
            this.loginFailedMessage = 'There is no user corresponding to the given email';
            break;
          case 'auth/wrong-password':
            this.loginFailedMessage = 'The password is invalid for the given email.';
            break;
          case 'auth/emailNotVerified':
            this.loginFailedMessage = 'The email address has not been verified.';
            break;
          default:
            this.loginFailedMessage = 'Login failed.';
            break;
        };
        this.account.reset({ email: this.account.value.email, password: null });
      });
  }

  logout() {
    this.authService.logout();
  }

}

