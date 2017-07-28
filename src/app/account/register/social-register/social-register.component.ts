import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-social-register',
  templateUrl: './social-register.component.html',
  styleUrls: ['./social-register.component.scss']
})
export class SocialRegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }
}
