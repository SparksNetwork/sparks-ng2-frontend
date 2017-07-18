import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule, routedComponents } from './projects-routing.module';
import { SharedModule } from "app/shared/shared.module";
import { EventSocialComponent } from './shared/event-social/event-social.component';
import { EventAskOrganizerButtonComponent } from './shared/event-ask-organizer-button/event-ask-organizer-button.component';
import { OpportunityService } from "app/projects/shared/opportunity.service";
import { OpportunityCommitmentsComponent } from './shared/opportunity-commitments/opportunity-commitments.component';
import { CalendarPipe } from "app/shared/pipes/calendar.pipe";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, EventSocialComponent, EventAskOrganizerButtonComponent, OpportunityCommitmentsComponent],
  providers: [OpportunityService]
})
export class ProjectsModule { }
