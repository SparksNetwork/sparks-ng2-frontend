import { Component, OnInit } from '@angular/core';
import { CardItemType } from "app/shared/card-item/card-item.enum";
import { IScheduleItem } from "app/shared/schedule/schedule-item.interface";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  cardItemType = CardItemType;
  scheduleItems: IScheduleItem[];
  images: string[];

  constructor() { }

  ngOnInit() {
    this.scheduleItems = [
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 1" },
      { title: "Security Crew", description: null, date: "june 2nd, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 2" },
      { title: "Head Squad", description: null, date: "june 1st, 2017 - 2:00 PM", karmaPoints: null, shift: "Shift - 3" },
    ];

    this.images = [
      'https://placeimg.com/1140/410/animals/grayscale',
      'https://placeimg.com/1140/410/people/grayscale',
      'https://placeimg.com/1140/410/nature/grayscale'
    ]
  }
}
