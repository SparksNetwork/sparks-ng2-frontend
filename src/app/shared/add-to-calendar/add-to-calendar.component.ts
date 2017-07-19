import { Component, OnInit, Input } from '@angular/core';
import FileSaver from 'file-saver';

import { AddToCalendarService } from "app/core/services/add-to-calendar.service";
import { AddToCalendar } from "app/shared/add-to-calendar/add-to-calendar.model";

@Component({
  selector: 'app-add-to-calendar',
  templateUrl: './add-to-calendar.component.html',
  styleUrls: ['./add-to-calendar.component.css']
})
export class AddToCalendarComponent implements OnInit {

  @Input() data: AddToCalendar;
  googleUrl: string;
  microsoftUrl: string;

  constructor(private addToCalendarService: AddToCalendarService) { }

  ngOnInit() {
    this.googleUrl = this.addToCalendarService.getGoogleCalendarUrl(this.data);
    this.microsoftUrl = this.addToCalendarService.getMicrosoftCalendarUrl(this.data);
  }

  downloadIcal($event) {
    $event.preventDefault();

    if (!this.data) return;

    let fileName = this.addToCalendarService.getIcsFileName(this.data.title),
      icsData = this.addToCalendarService.getIcsCalendar(this.data),
      icsBlob = this.addToCalendarService.getIcsBlob(icsData);

    FileSaver.saveAs(icsBlob, fileName);
  }
}