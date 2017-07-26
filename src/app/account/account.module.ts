import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountRoutingModule } from "app/account/account-routing.module";
import { SharedModule } from "app/shared/shared.module";
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [AccountComponent, RegisterLoginComponent, ForgotPasswordComponent, ResetPasswordComponent, CompleteProfileComponent]
})
export class AccountModule { }
