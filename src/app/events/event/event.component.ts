import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

import { CardItemType } from "app/shared/card-item/card-item.enum";
import { IScheduleItem } from "app/shared/schedule/schedule-item.interface";
import { AddToCalendar } from "app/shared/add-to-calendar/add-to-calendar.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any;
  joinedOpportunities: any[];
  cardItemType = CardItemType;
  scheduleItems: IScheduleItem[];
  addToCalendarData: AddToCalendar;

  constructor(private route: ActivatedRoute, private http: Http) {
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

      this.getJoinedOpportunities(1, this.event.id).subscribe(joinedOpportunities => {        
          this.joinedOpportunities = joinedOpportunities;
          //TODO map joined opportunities with event.oportunities to show status 
      });
    });

    this.scheduleItems = [
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 1" },
      { title: "Security Crew", description: null, date: "june 2nd, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 2" },
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 3" },
    ];
  }

  /**
   * @description Gets oppportunities on which user applied
   */
  getJoinedOpportunities(userId: number, eventId: number) {
    return <Observable<any>>this.http.get(`api/userOpportunities?userId=${userId}&eventId=${eventId}`)
      .map(res => {
        let data = this.extractData<any>(res);

        if (!data || !data.length)
          return Observable.of(null);

        return data[0].opportunities;
      })
      .catch(exception => {
        //TODO treat exception;
        console.log(exception);
        return Observable.of(false);
      });
  }

  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || []);
  }
}
