import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountRoutingModule } from "app/account/account-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, RegisterLoginComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class AccountModule { }
