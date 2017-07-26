import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';

import { AuthService } from "app/core/services/auth.service";
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {     
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
