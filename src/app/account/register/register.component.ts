import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { AuthService } from 'app/core/services/auth.service';
import { FirebaseError } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFailedMessage: string;
  private account: FormGroup;

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) { }

  ngOnInit() {
    this.account = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  createUserWithEmailAndPassword($event) {
    $event.preventDefault();

    this.registerFailedMessage = null;

    this.authService.createUserWithEmailAndPassword(this.account.value.email, this.account.value.password).then(user => {
      //TODO redirect to congrats generic and send confirm data
    })
      .catch((error: FirebaseError) => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.registerFailedMessage = 'The email address is not valid.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          case 'auth/email-already-in-use':
            this.registerFailedMessage = 'There already exists an account with the given email address.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          case 'auth/operation-not-allowed':
            this.registerFailedMessage = 'Email/password accounts are not enabled.';
            break;
          case 'auth/weak-password':
            this.registerFailedMessage = 'The password is not strong enough.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
          default:
            this.registerFailedMessage = 'Login failed.';
            this.account.reset({ email: this.account.value.email, password: null });
            break;
        }
      });
  }
}


