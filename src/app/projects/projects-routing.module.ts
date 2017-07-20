import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from "./projects.component";
import { ProjectResolver } from "app/projects/project/project-resolver.service";
import { OpportunityResolver } from "app/projects/opportunity/opportunity-resolver.service";
import { OpportunityComponent } from "app/projects/opportunity/opportunity.component";

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
      // {
      //   path: ':id/opportunity',
      //   loadChildren: 'app/projects/opportunities/opportunities.module#OpportunitiesModule'
      // },
       {
          path: ':id/opportunity',
          component: OpportunityComponent,
          resolve: {
            opportunity: OpportunityResolver
          }
        },
        {
          path: ':id/opportunity/:oppId',
          component: OpportunityComponent,
          resolve: {
            opportunity: OpportunityResolver
          }
        }
      
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectResolver, OpportunityResolver]
})
export class ProjectsRoutingModule { }

export const routedComponents = [ProjectsComponent, ProjectComponent];
