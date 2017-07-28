import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';
import { NavComponent } from 'app/core/nav/nav.component';
import { OpportunityService } from 'app/core/services/opportunity.service';
import { UserAssignmentService } from 'app/core/services/user-assignments.service';
import { ProjectService } from 'app/core/services/project.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, NavComponent],
  exports: [PageNotFoundComponent, NavComponent],
  providers: [UserAssignmentService, OpportunityService, ProjectService]
})
export class CoreModule { }
