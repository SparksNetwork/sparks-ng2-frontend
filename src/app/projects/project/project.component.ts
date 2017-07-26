import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
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
import { IProjectModel } from "app/core/models/project.model";
import { ProjectService } from "app/core/services/project.service";
import { FormatterService } from "app/core/services/formatter.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: IProjectModel;
  projectStart: string;
  projectEnd: string;
  projectLocation: string;
  opportunityCards: ProjectOpportunityCard[];
  scheduleItems: ScheduleItem[];
  opportunityCommitments: any[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService, private userAssignmentService: UserAssignmentService, 
    private dateSerivce: DateService, private projectService: ProjectService, private changeDetectorRef: ChangeDetectorRef,
    private formatterService: FormatterService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      let id = params.get('id');

      this.projectService.getProject(id).subscribe(project => {
        this.project = <IProjectModel>project;
        this.projectStart = this.dateSerivce.toDisplayFormat(this.project.startDateTime);
        this.projectEnd = this.dateSerivce.toDisplayFormat(this.project.endDateTime);
        this.projectLocation = this.formatterService.getLocationString(this.project.location);

        this.addToCalendarData = {
          startDate: this.project.startDateTime,
          endDate: this.project.endDateTime,
          title: this.project.title,
          location: this.project.location,
          description: this.project.description
        };

        this.processOpportunities(project.opportunities);
        this.getUserEngagement();

        this.changeDetectorRef.markForCheck();
      });
    });
  }

  /**
   * @description Processes opportunities by:
   * - getting commitments if only one opportunity available
   * - poppulating opportunity cards 
   * @param opportunities 
   */
  private processOpportunities(opportunities): void {
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
  private getUserEngagement(): void {
    this.opportunityService.getUserEngagement(1, this.project.projectKey).subscribe(engagement => {
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
  private getOpportunityCommitments(opportunityId: number): void {
    this.opportunityService.getCommitments(opportunityId).subscribe(data => {
      this.opportunityCommitments = data;
    });
  }

  /**
   * @description Gets user assignement for the specified engagement.
   * @param engagement
   */
  private getAssignments(engagement: any): void {
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
  public setProjectOpportunitiesCardType(engagement: any): void {
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
