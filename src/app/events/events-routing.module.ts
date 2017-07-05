import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventsComponent } from "./events.component";
import { PackagesModule } from "app/events/packages/packages.module";
import { EventResolver } from "app/events/event/event-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: ':id',
        component: EventComponent,
        resolve: {
          event: EventResolver
        },
      },
      {
        path: ':id/packages',
        loadChildren: 'app/events/packages/packages.module#PackagesModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EventResolver]
})
export class EventsRoutingModule { }

export const routedComponents = [EventsComponent, EventComponent];
