import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "app/account/account.component";
import { ForgotPasswordComponent } from "app/account/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "app/account/reset-password/reset-password.component";
import { RegisterLoginComponent } from "app/account/register-login/register-login.component";
import { CompleteProfileComponent } from "app/account/complete-profile/complete-profile.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: RegisterLoginComponent
      },
      {
        path: 'complete-profile',
        component: CompleteProfileComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
