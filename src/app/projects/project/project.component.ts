import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

import { CardItemType } from "app/shared/card-item/card-item.enum";
import { ScheduleItem } from "app/shared/schedule/schedule-item.model";
import { Observable } from "rxjs/Observable";
import { ProjectOpportunityCard } from "app/projects/shared/project-opportunity-card.model";
import { OpportunityService } from "app/core/services/opportunity.service";
import { UserAssignmentService } from "app/core/services/user-assignments.service";
import { AddToCalendar } from "app/projects/add-to-calendar/add-to-calendar.model";
import { EngagementStatus } from "app/projects/shared/engagement-status.enum";
import { DateService } from "app/core/services/date.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any;
  projectStart: string;
  projectEnd: string;
  opportunityCards: ProjectOpportunityCard[];
  scheduleItems: ScheduleItem[];
  opportunityCommitments: any[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService, private userAssignmentService: UserAssignmentService, private dateSerivce: DateService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { project: any }) => {
      this.project = data.project;
      this.projectStart = this.dateSerivce.toDisplayFormat(this.project.startDate);
      this.projectEnd = this.dateSerivce.toDisplayFormat(this.project.endDate);

      this.addToCalendarData = {
        startDate: this.project.startDate,
        endDate: this.project.endDate,
        title: this.project.title,
        location: this.project.location,
        description: this.project.description
      };

      this.processOpportunities(data.project.opportunities);
      this.getUserEngagement();
    });
  }

  /**
   * @description Processes opportunities by:
   * - getting commitments if only one opportunity available
   * - poppulating opportunity cards 
   * @param opportunities 
   */
  private processOpportunities(opportunities) : void {
    if (!opportunities || !opportunities.length) return;

    if (opportunities.length == 1) {
      this.getOpportunityCommitments(opportunities[0].id);
    } else {
      this.opportunityCards = <ProjectOpportunityCard[]>opportunities;
    }
  }

  /**
   * @description Gets and processes the engagement by getting engagement's assignments 
   * and setting opportunity card type
   */
  private getUserEngagement() : void {
    this.opportunityService.getUserEngagement(1, this.project.id).subscribe(engagement => {
      if (!engagement) return;

      this.getAssignments(engagement);

      if (this.opportunityCards && this.opportunityCards.length) {
        this.setProjectOpportunitiesCardType(engagement);
      }
    });
  }

  /**
   * @description Gets the commitments for the given opportunity
   * @param opportunityId 
   */
  private getOpportunityCommitments(opportunityId: number) : void {
    this.opportunityService.getCommitments(opportunityId).subscribe(data => {
      this.opportunityCommitments = data;
    });
  }

  /**
   * @description Gets user assignement for the specified engagement.
   * @param engagement
   */
  private getAssignments(engagement: any) : void {
    if (!engagement || engagement.status !== EngagementStatus.Confirmed) return;

    this.userAssignmentService.getAssignments(1, engagement.id).subscribe((assignments: Array<any>) => {      
      this.scheduleItems = assignments.map(x => {
        let schedule = new ScheduleItem();
        schedule.title = x.team.name;
        schedule.date = x.shift.startDate;
        schedule.shift = x.shift.name;
        return schedule;
      })
    });
  }

  /**
   * @description Sets the ooportunity card status based on engagement provided
   * @param engagement 
   */
  public setProjectOpportunitiesCardType(engagement: any) : void {   
    if (!engagement) return;

    for (let card of this.opportunityCards) {      
      //is engagement's opportunity
      if (engagement.opportunityId == card.id) {
        card.type = engagement.status == EngagementStatus.Confirmed ? CardItemType.Active : CardItemType.Pending;       
        continue;
      }

      switch (<EngagementStatus>engagement.status) {
        case EngagementStatus.Accepted:
        case EngagementStatus.Applyed:        
          card.type = CardItemType.Disabled;
          break;
        default:
          card.type = null;
      }
    }
  }
}
