import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

import { CardItemType } from "app/shared/card-item/card-item.enum";
import { IScheduleItem } from "app/shared/schedule/schedule-item.interface";
import { AddToCalendar } from "app/shared/add-to-calendar/add-to-calendar.model";
import { Observable } from "rxjs/Observable";
import { EngagementStatus } from "app/events/shared/engagement-status.enum";
import { EventOpportunityCard } from "app/events/event/event-oportunity-card.model";
import { OpportunityService } from "app/events/shared/opportunity.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any;
  opportunityCards: EventOpportunityCard[];
  cardItemType = CardItemType;
  scheduleItems: IScheduleItem[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private http: Http, private opportunityService: OpportunityService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { event: any }) => {
      this.event = data.event;
      this.opportunityCards = <EventOpportunityCard[]>data.event.opportunities
      this.addToCalendarData = {
        startDate: this.event.startDate,
        endDate: this.event.endDate,
        title: this.event.title,
        location: this.event.location,
        description: this.event.description
      };

      if (this.opportunityCards.length > 1) {
        this.opportunityService.getUserEngagements(1, this.event.id).subscribe(engagements =>
          this.setEventOpportunitiesCardType(engagements)
        );
      }
    });

    this.scheduleItems = [
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 1" },
      { title: "Security Crew", description: null, date: "june 2nd, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 2" },
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 3" },
    ];
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
