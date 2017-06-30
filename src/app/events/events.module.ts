import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule, routedComponents } from './events-routing.module';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents]
})
export class EventsModule { }
