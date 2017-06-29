import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule, routedComponents } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  declarations: [routedComponents]
})
export class EventsModule { }
