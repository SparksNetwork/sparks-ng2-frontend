import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "app/shared/shared.module";
import { TeamPickerComponent } from './team-picker/team-picker.component';
import { SelectedTeamsComponent } from './selected-teams/selected-teams.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { SubmissionConfirmComponent } from './submission-confirm/submission-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TeamPickerComponent, SelectedTeamsComponent, ReviewApplicationComponent, SubmissionConfirmComponent]
})
export class TeamsModule { }
