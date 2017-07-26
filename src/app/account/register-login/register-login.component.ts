import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


import { AuthService } from "app/core/services/auth.service";
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  loginFailed: boolean; 
  login = { email: null, password: null };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  signInWithEmailAndPassword() {    
    this.loginFailed = false;
    this.authService.signInWithEmailAndPassword(this.login.email, this.login.password).catch((error) => {
      this.login.password = "";
      this.loginFailed = true;
    });
  }

  logout() {
    this.authService.logout();
  }

}

