import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule, routedComponents } from './projects-routing.module';
import { SharedModule } from "app/shared/shared.module";
import { ProjectSocialComponent } from './shared/project-social/project-social.component';
import { ProjectAskOrganizerButtonComponent } from './shared/project-ask-organizer-button/project-ask-organizer-button.component';
import { OpportunityService } from "app/core/services/opportunity.service";
import { OpportunityCommitmentsComponent } from './shared/opportunity-commitments/opportunity-commitments.component';
import { AddToCalendarComponent } from "app/projects/add-to-calendar/add-to-calendar.component";
import { AddToCalendarService } from "app/projects/add-to-calendar/add-to-calendar.service";
import { OpportunityComponent } from "app/projects/opportunity/opportunity.component";
import { OpportunityHeaderComponent } from './opportunity-header/opportunity-header.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, ProjectSocialComponent, ProjectAskOrganizerButtonComponent, OpportunityCommitmentsComponent, AddToCalendarComponent, OpportunityComponent, OpportunityHeaderComponent],
  providers: [OpportunityService, AddToCalendarService]
})
export class ProjectsModule { }
