import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventsComponent } from "./events.component";
import { PackagesModule } from "app/events/packages/packages.module";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: ':id',
        component: EventComponent
      },
      {
        path: ':id/packages',
        loadChildren: () => PackagesModule
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

export const routedComponents = [EventsComponent, EventComponent];
