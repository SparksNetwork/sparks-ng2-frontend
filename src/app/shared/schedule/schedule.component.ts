import { Component, OnInit, Input } from '@angular/core';

import { IScheduleItem } from "app/shared/schedule/schedule-item.interface";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() items: IScheduleItem[];

  constructor() { }

  ngOnInit() {
  }

}
