import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule, routedComponents } from './events-routing.module';
import { SharedModule } from "app/shared/shared.module";
import { EventSocialComponent } from './shared/event-social/event-social.component';
import { EventAskOrganizerButtonComponent } from './shared/event-ask-organizer-button/event-ask-organizer-button.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, EventSocialComponent, EventAskOrganizerButtonComponent]
})
export class EventsModule { }
