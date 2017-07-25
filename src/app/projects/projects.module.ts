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
import { OpportunityDetailsComponent } from "app/projects/opportunity-details/opportunity-details.component";
import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunityTeamsComponent } from './shared/opportunity-teams/opportunity-teams.component';
import { ProjectJoinComponent } from './shared/project-join/project-join.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, ProjectSocialComponent, ProjectAskOrganizerButtonComponent, OpportunityCommitmentsComponent, AddToCalendarComponent, OpportunityComponent, OpportunityDetailsComponent, OpportunityTeamsComponent, ProjectJoinComponent],
  providers: [OpportunityService, AddToCalendarService]
})
export class ProjectsModule { }
