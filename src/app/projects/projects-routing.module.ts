import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from "./projects.component";
import { ProjectResolver } from "app/projects/project/project-resolver.service";
import { OpportunityResolver } from "app/projects/opportunity/opportunity-resolver.service";
import { OpportunityComponent } from "app/projects/opportunity/opportunity.component";
import { OpportunityHeaderResolver } from "app/projects/opportunity-header/opportunity-header-resolver.service.1";
import { OpportunityHeaderComponent } from "app/projects/opportunity-header/opportunity-header.component";
import { OpportunityHeaderService } from "app/projects/opportunity-header/opportunity-header.service";

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
        component: OpportunityHeaderComponent,
        resolve: {
          opportunityHeader: OpportunityHeaderResolver
        },
        children: [
          {
            path: ':oppId',
            component: OpportunityComponent,
            resolve: {
              opportunity: OpportunityResolver
            }
          }
        ]
      }
      // {
      //   path: ':id/opportunity',
      //   component: OpportunityComponent,
      //   resolve: {
      //     opportunity: OpportunityResolver
      //   }
      // },
      // {
      //   path: ':id/opportunity/:oppId',
      //   component: OpportunityComponent,
      //   resolve: {
      //     opportunity: OpportunityResolver,
      //     opportunityHeader: OpportunityHeaderResolver
      //   }
      // }

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectResolver, OpportunityResolver, OpportunityHeaderResolver, OpportunityHeaderService]
})
export class ProjectsRoutingModule { }

export const routedComponents = [ProjectsComponent, ProjectComponent, OpportunityHeaderComponent, OpportunityComponent];
