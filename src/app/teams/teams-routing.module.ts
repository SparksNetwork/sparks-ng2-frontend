import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamPickerComponent } from "app/teams/team-picker/team-picker.component";
import { ReviewApplicationComponent } from "app/teams/review-application/review-application.component";
import { SubmissionConfirmComponent } from "app/teams/submission-confirm/submission-confirm.component";
import { QuestionComponent } from "app/shared/question/question.component";


const routes: Routes = [
    {
        path: ':oppId',
        component: TeamPickerComponent,
    },
    {
        path: ':oppId/question',
        component: QuestionComponent
    },
    {
        path: ':oppId/review',
        component: ReviewApplicationComponent
    },
    {
        path: ':oppId/confirm',
        component: SubmissionConfirmComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TeamsRoutingModule { }

export const routedComponents = [TeamPickerComponent, ReviewApplicationComponent, SubmissionConfirmComponent];
