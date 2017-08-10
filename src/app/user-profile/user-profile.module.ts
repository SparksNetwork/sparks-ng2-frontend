import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserHeaderComponent } from './shared/user-header/user-header.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { BadgesComponent } from './badges/badges.component';
import { TrophiesComponent } from './trophies/trophies.component';
import { AccoladesComponent } from './accolades/accolades.component';
import { ProfileActivityDetailsComponent } from './profile-activity-details/profile-activity-details.component';
import { EditProfileDetailsComponent } from './edit-profile-details/edit-profile-details.component';
import { EditContactInfoComponent } from './edit-contact-info/edit-contact-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmChangesComponent } from './confirm-changes/confirm-changes.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { SharedModule } from 'app/shared/shared.module';
import { BadgeListComponent } from './shared/badge-list/badge-list.component';
import { TrophyListComponent } from './shared/trophy-list/trophy-list.component';
import { AccoladeListComponent } from './shared/accolade-list/accolade-list.component';
import { EventsHistoryComponent } from './shared/events-history/events-history.component';
import { BadgeListDetailsComponent } from './badges/badge-list-details/badge-list-details.component';
import { AccoladeListDetailsComponent } from './accolades/accolade-list-details/accolade-list-details.component';
import { TrophyListDetailsComponent } from './trophies/trophy-list-details/trophy-list-details.component';
import { CongratsTrophyComponent } from './trophies/congrats-trophy/congrats-trophy.component';
import { CongratsAccoladesComponent } from './accolades/congrats-accolades/congrats-accolades.component';
import { SelectBadgeComponent } from './badges/select-badge/select-badge.component';
import { ConfirmBadgeComponent } from './badges/confirm-badge/confirm-badge.component';
import { CongratsBadgeComponent } from './badges/congrats-badge/congrats-badge.component';
import { QuestsComponent } from 'app/user-profile/quests/quests.component';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ],
  declarations: [UserProfileComponent, UserHeaderComponent, ProfileInfoComponent, BadgesComponent, TrophiesComponent,
     AccoladesComponent, ProfileActivityDetailsComponent, EditProfileDetailsComponent, EditContactInfoComponent,
     ChangePasswordComponent, ConfirmChangesComponent, PublicProfileComponent, BadgeListComponent, TrophyListComponent,
     AccoladeListComponent, QuestsComponent, EventsHistoryComponent, BadgeListDetailsComponent, AccoladeListDetailsComponent,
     TrophyListDetailsComponent, CongratsTrophyComponent, CongratsAccoladesComponent, SelectBadgeComponent,
     ConfirmBadgeComponent, CongratsBadgeComponent]
})
export class UserProfileModule { }
