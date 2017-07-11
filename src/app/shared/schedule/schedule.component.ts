import { Component, OnInit, Input } from '@angular/core';

import { ScheduleItem } from "app/shared/schedule/schedule-item.model";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @Input() items: ScheduleItem[];

  constructor() { }

  ngOnInit() {
  }

}
