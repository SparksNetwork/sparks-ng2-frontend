import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

import { CardItemType } from "app/shared/card-item/card-item.enum";
import { ScheduleItem } from "app/shared/schedule/schedule-item.model";
import { AddToCalendar } from "app/shared/add-to-calendar/add-to-calendar.model";
import { Observable } from "rxjs/Observable";
import { EngagementStatus } from "app/events/shared/engagement-status.enum";
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

      if (data.event.opportunities.length == 1) {
        this.getOpportunityCommitments(data.event.opportunities[0].id);
      } else if (data.event.opportunities.length > 1) {
        this.opportunityCards = <EventOpportunityCard[]>data.event.opportunities
        this.opportunityService.getUserEngagements(1, this.event.id).subscribe(engagements => {
          this.getAssignments(engagements);
          this.setEventOpportunitiesCardType(engagements);
        });
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
   * @description Gets user assignement for the first active engagement.
   * @param engagements
   */
  getAssignments(engagements: any) {
    if (!engagements.length) return;

    let activeEngagement = engagements.find(x => x.status == EngagementStatus.Active);

    if (!activeEngagement) return;

    this.userAssignmentService.getForEngagement(1, activeEngagement.id).subscribe(assignments => {
      this.scheduleItems = assignments.map(x => {
        let schedule = new ScheduleItem();
        schedule.date = x.startDate;
        schedule.shift = x.shift.name;
        return schedule;
      })
    });
  }

  setEventOpportunitiesCardType(engagements: any) {
    if (!engagements.length) return;

    let pendingEngagement = engagements.find(x => x.status == EngagementStatus.Pending);

    for (let card of this.opportunityCards) {
      if (pendingEngagement && pendingEngagement.opportunityId != card.id) {
        //disable all other oportunities
        card.type = CardItemType.Disabled;
        continue;
      }

      let engagement = engagements.find(x => x.opportunityId == card.id);

      if (engagement) {
        card.type = this.getOportunityCardItemTypeByEngagementStatus(engagement.status);
      }
    }
  }

  private getOportunityCardItemTypeByEngagementStatus(engagementStatus) {
    switch (engagementStatus) {
      case EngagementStatus.Active:
        return CardItemType.Active;
      case EngagementStatus.Pending:
        return CardItemType.Pending;
    }
  }
}
