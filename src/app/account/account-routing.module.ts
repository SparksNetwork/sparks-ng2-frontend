import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from 'app/account/account.component';
import { ForgotPasswordComponent } from 'app/account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'app/account/reset-password/reset-password.component';
import { RegisterLoginComponent } from 'app/account/register-login/register-login.component';
import { CompleteProfileComponent } from 'app/account/complete-profile/complete-profile.component';
import { RegisterLoginGuard } from 'app/account/register-login/register-login-guard.service';
import { RegisterComponent } from 'app/account/register/register.component';
import { SocialRegisterComponent } from 'app/account/register/social-register/social-register.component';
import { EmailRegisterComponent } from 'app/account/register/email-register/email-register.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: RegisterLoginComponent,
        // we need to guard this because of user beeing redirected to login after login process succeeds
        canActivate: [RegisterLoginGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [RegisterLoginGuard],
        children: [
          { path: '', redirectTo: 'social' },
          { path: 'social', component: SocialRegisterComponent },
          { path: 'email', component: EmailRegisterComponent }
        ]
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
  exports: [RouterModule],
  providers: [RegisterLoginGuard]
})
export class AccountRoutingModule { }

export const routedComponents = [RegisterComponent, EmailRegisterComponent, SocialRegisterComponent]
