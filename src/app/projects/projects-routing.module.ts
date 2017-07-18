import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from "./projects.component";
import { PackagesModule } from "app/projects/packages/packages.module";
import { ProjectResolver } from "app/projects/project/project-resolver.service";

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
        path: ':id/packages',
        loadChildren: 'app/projects/packages/packages.module#PackagesModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProjectResolver]
})
export class ProjectsRoutingModule { }

export const routedComponents = [ProjectsComponent, ProjectComponent];
