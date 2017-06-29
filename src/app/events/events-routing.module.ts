import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventsComponent } from "./events.component";
import { PackagesComponent} from "app/events/packages/packages.component";
import { PackageComponent } from "app/events/packages/package/package.component";

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
        component: PackagesComponent,
        children: [
          {
            path: ':packageId',
            component: PackageComponent
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

export const routedComponents = [EventsComponent, EventComponent, PackagesComponent, PackageComponent];
