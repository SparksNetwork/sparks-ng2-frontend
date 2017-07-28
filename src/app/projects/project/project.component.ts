import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';

import { ScheduleItem } from 'app/shared/schedule/schedule-item.model';
import { OpportunityService } from 'app/core/services/opportunity.service';
import { UserAssignmentService } from 'app/core/services/user-assignments.service';
import { AddToCalendar } from 'app/projects/add-to-calendar/add-to-calendar.model';
import { EngagementStatus } from 'app/core/enums/engagement-status.enum';
import { DateService } from 'app/core/services/date.service';
import { IProjectModel } from 'app/core/models/project.model';
import { ProjectService } from 'app/core/services/project.service';
import { FormatterService } from 'app/core/services/formatter.service';
import { IOpportunityCardModel } from 'app/core/models/opportunity-card.model';
import { IOpportunityCommitmentsModel } from 'app/core/models/opportunity-commitments.model';
import { CardItemStatus } from 'app/core/enums/card-item-status.enum';
import { IUserEngagementModel } from 'app/core/models/user-engagement.model';
import { ProjectPageSources } from "app/projects/project/project-resolver.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: IProjectModel;
  engagements: IUserEngagementModel[];
  projectStart: string;
  projectEnd: string;
  projectLocation: string;
  opportunityCards: IOpportunityCardModel[];
  scheduleItems: ScheduleItem[];
  opportunityCommitments: IOpportunityCommitmentsModel[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService,
    private userAssignmentService: UserAssignmentService, private dateSerivce: DateService,
    private projectService: ProjectService, private changeDetectorRef: ChangeDetectorRef,
    private formatterService: FormatterService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { sources: ProjectPageSources }) => {
      console.log(data);
      console.log(data.sources.projectObservable);

      if (data && data.sources) {
        data.sources.projectObservable.subscribe(project => {
          this.project = project;
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

          this.processOpportunities(this.project.opportunities);
        });

        data.sources.engagementsObservable.subscribe(engagemens => {
          this.engagements = engagemens;
           // this.getUserEngagement(); TODO finish implementation
        });
      }

    });
  }

  /**
   * @description Processes opportunities by:
   * - getting commitments if only one opportunity available
   * - poppulating opportunity cards
   * @param opportunities
   */
  private processOpportunities(opportunities: IOpportunityCardModel[]): void {
    if (!opportunities || !opportunities.length) {
      return
    };

    if (opportunities.length === 1) {
      this.getOpportunityCommitments(opportunities[0].opportunityKey);
    } else {
      this.opportunityCards = <IOpportunityCardModel[]>opportunities;
    }
  }

  /**
   * @description Gets and processes the engagement by getting engagement's assignments
   * and setting opportunity card type
   */
  private getUserEngagement(): void {
    // this.opportunityService.getUserEngagement(1, this.project.projectKey).subscribe(engagement => {
    //   if (!engagement) return;

    //   this.getAssignments(engagement);

    //   if (this.opportunityCards && this.opportunityCards.length) {
    //     this.setProjectOpportunitiesCardType(engagement);
    //   }
    // });
  }

  /**
   * @description Gets the commitments for the given opportunity
   * @param opportunityKey
   */
  private getOpportunityCommitments(opportunityKey: string): void {
    this.opportunityService.getCommitments(opportunityKey).subscribe(data => {
      this.opportunityCommitments = data;
    });
  }

  /**
   * @description Gets user assignement for the specified engagement.
   * @param engagement
   */
  private getAssignments(engagement: any): void {
    if (!engagement || engagement.status !== EngagementStatus.Confirmed) {
      return
    };

    this.userAssignmentService.getAssignments(1, engagement.id).subscribe((assignments: Array<any>) => {
      this.scheduleItems = assignments.map(x => {
        const schedule = new ScheduleItem();
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
    if (!engagement) {
      return;
    }

    for (const card of this.opportunityCards) {
      // is engagement's opportunity
      if (engagement.opportunityId === card.opportunityKey) {
        card.status = engagement.status === EngagementStatus.Confirmed ? CardItemStatus.Active : CardItemStatus.Pending;
        continue;
      }

      switch (<EngagementStatus>engagement.status) {
        case EngagementStatus.Accepted:
        case EngagementStatus.Applied:
          card.status = CardItemStatus.Disabled;
          break;
        default:
          card.status = null;
      }
    }
  }
}
