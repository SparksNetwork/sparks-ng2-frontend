import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

import * as moment from 'moment';

import { CardItemType } from "app/shared/card-item/card-item.enum";
import { ScheduleItem } from "app/shared/schedule/schedule-item.model";
import { AddToCalendar } from "app/shared/add-to-calendar/add-to-calendar.model";
import { Observable } from "rxjs/Observable";
import { EngagementStatus } from "app/shared/engagement-status.enum";
import { EventOpportunityCard } from "app/events/event/event-oportunity-card.model";
import { OpportunityService } from "app/events/shared/opportunity.service";
import { UserAssignmentService } from "app/shared/user-assignments.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any;
  opportunityCards: EventOpportunityCard[];
  cardItemType = CardItemType;
  scheduleItems: ScheduleItem[];
  opportunityCommitments: any[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService, private userAssignmentService: UserAssignmentService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { event: any }) => {
      this.event = data.event;
      this.addToCalendarData = {
        startDate: this.event.startDate,
        endDate: this.event.endDate,
        title: this.event.title,
        location: this.event.location,
        description: this.event.description
      };

      this.processOpportunities(data.event.opportunities);
      this.getUserEngagement()
    });
  }

  /**
   * @description Processes opportunities by:
   * - getting commitments if only one opportunity available
   * - poppulating opportunity cards 
   * @param opportunities 
   */
  processOpportunities(opportunities) {
    if (!opportunities || !opportunities.length) return;

    if (opportunities.length == 1) {
      this.getOpportunityCommitments(opportunities[0].id);
    } else {
      this.opportunityCards = <EventOpportunityCard[]>opportunities;
    }
  }

  /**
   * @description Gets and processes the engagement by getting engagement's assignments 
   * and setting opportunity card type
   */
  getUserEngagement() {
    this.opportunityService.getUserEngagement(1, this.event.id).subscribe(engagement => {
      if (!engagement) return;

      this.getAssignments(engagement);

      if (this.opportunityCards && this.opportunityCards.length) {
        this.setEventOpportunitiesCardType(engagement);
      }
    });
  }

  /**
   * @description Gets the commitments for the given opportunity
   * @param opportunityId 
   */
  getOpportunityCommitments(opportunityId: number) {
    this.opportunityService.getCommitments(this.event.id, opportunityId).subscribe(opportunityCommitments => {
      this.opportunityCommitments = opportunityCommitments;
    });
  }

  /**
   * @description Gets user assignement for the specified engagement.
   * @param engagement
   */
  getAssignments(engagement: any) {
    if (!engagement || engagement.status !== EngagementStatus.Confirmed) return;

    this.userAssignmentService.getAssignments(1, engagement.id).subscribe((assignments: Array<any>) => {
      console.log(assignments);
      this.scheduleItems = assignments.map(x => {
        let schedule = new ScheduleItem();
        schedule.title = x.team.name;
        schedule.date = moment(x.shift.startDate).calendar(null, {
          sameElse: 'LLL'
        });
        schedule.shift = x.shift.name;
        return schedule;
      })
    });
  }

  /**
   * @description Sets the ooportunity card status based on engagement provided
   * @param engagement 
   */
  setEventOpportunitiesCardType(engagement: any) {   
    if (!engagement) return;

    for (let card of this.opportunityCards) {      
      //is engagement's opportunity
      if (engagement.opportunityId == card.id) {
        card.type = engagement.status == EngagementStatus.Confirmed ? CardItemType.Active : CardItemType.Pending;
        console.log("continue");
        continue;
      }

      switch (<EngagementStatus>engagement.status) {
        case EngagementStatus.Accepted:
        case EngagementStatus.Applyed:
        console.log("disabling");
          card.type = CardItemType.Disabled;
          break;
        default:
          card.type = null;
      }
    }
  }
}
