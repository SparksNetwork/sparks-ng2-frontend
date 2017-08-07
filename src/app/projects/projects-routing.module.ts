import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';
import { ProjectResolver } from 'app/projects/project/project-resolver.service';
import { OpportunityDetailsComponent } from 'app/projects/opportunity-details/opportunity-details.component';
import { OpportunityResolver } from 'app/projects/opportunity/opportunity-resolver.service';
import { OpportunityComponent } from 'app/projects/opportunity/opportunity.component';
import { OpportunityNavService } from 'app/projects/opportunity/opportunity-nav.service';
import { OpportunityDetailsResolver } from 'app/projects/opportunity-details/opportunity-details-resolver.service';
import { QuestionComponent } from 'app/shared/question/question.component';
import { CancelVolunteeringComponent } from "app/projects/cancel-volunteering/cancel-volunteering.component";
import { CancelConfirmationComponent } from "app/projects/cancel-confirmation/cancel-confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: ':id',
        component: ProjectComponent,
        resolve: {
          project: ProjectResolver
        },
      },
      {
        path: ':id/opportunity',
        component: OpportunityComponent,
        resolve: {
          opportunityHeader: OpportunityResolver
        },
        children: [
          {
            path: ':oppId',
            component: OpportunityDetailsComponent,
            resolve: {
              opportunity: OpportunityDetailsResolver
            }
          }
        ]
      },
      {
        path: ':id/question',
        component: QuestionComponent
      },
      {
        path: ':id/cancel',
        component: CancelVolunteeringComponent
      },
      {
        path: ':id/cancel-confirm',
        component: CancelConfirmationComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectResolver, OpportunityDetailsResolver, OpportunityResolver, OpportunityNavService]
})
export class ProjectsRoutingModule { }

export const routedComponents = [ProjectsComponent, ProjectComponent, OpportunityComponent, OpportunityDetailsComponent];
