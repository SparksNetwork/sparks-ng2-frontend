import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { SelectedTeamsComponent } from './selected-teams/selected-teams.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { SubmissionConfirmComponent } from './submission-confirm/submission-confirm.component';
import { TeamsRoutingModule } from 'app/teams/teams-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ],
  declarations: [TeamPickerComponent, SelectedTeamsComponent, ReviewApplicationComponent, SubmissionConfirmComponent]
})
export class TeamsModule { }
