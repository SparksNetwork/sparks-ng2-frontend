import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from "app/user-profile/user-profile.component";
import { ProfileActivityDetailsComponent } from "app/user-profile/profile-activity-details/profile-activity-details.component";
import { PublicProfileComponent } from "app/user-profile/public-profile/public-profile.component";
import { BadgesComponent } from "app/user-profile/badges/badges.component";
import { TrophiesComponent } from "app/user-profile/trophies/trophies.component";
import { AccoladesComponent } from "app/user-profile/accolades/accolades.component";
import { ProfileInfoComponent } from "app/user-profile/profile-info/profile-info.component";
import { EditProfileDetailsComponent } from "app/user-profile/edit-profile-details/edit-profile-details.component";
import { EditContactInfoComponent } from "app/user-profile/edit-contact-info/edit-contact-info.component";
import { ChangePasswordComponent } from "app/user-profile/change-password/change-password.component";
import { ConfirmChangesComponent } from "app/user-profile/confirm-changes/confirm-changes.component";
import { CongratsTrophyComponent } from "app/user-profile/trophies/congrats-trophy/congrats-trophy.component";

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        component: ProfileActivityDetailsComponent
      },
      {
        path: 'public',
        component: PublicProfileComponent
      },
      {
        path: 'badges',
        component: BadgesComponent
      },
      {
        path: 'trophies',
        component: TrophiesComponent
      },
      {
        path: 'congrats-trophy',
        component: CongratsTrophyComponent
      },
      {
        path: 'accolades',
        component: AccoladesComponent
      },
      {
        path: 'profile-info',
        component: ProfileInfoComponent
      },
      {
        path: 'edit-profile',
        component: EditProfileDetailsComponent
      },
      {
        path: 'edit-contact-info',
        component: EditContactInfoComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'confirm-changes',
        component: ConfirmChangesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
