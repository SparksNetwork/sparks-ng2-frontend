import { Injectable } from "@angular/core";
import * as moment from 'moment';

import { DateService } from 'app/core/services/date.service';
import { AddToCalendar } from "app/projects/add-to-calendar/add-to-calendar.model";

@Injectable()
export class AddToCalendarService {

    constructor(private dateService: DateService) { }

    getMicrosoftCalendarUrl(data: AddToCalendar) {
        if(!data) return;

        var microsoftCalendarUrl = 'http://calendar.live.com/calendar/calendar.aspx?rru=addevent';
        microsoftCalendarUrl += '&summary=' + encodeURIComponent(data.title);
        microsoftCalendarUrl += '&dtstart=' + encodeURIComponent(data.startDate) + '&dtend=' + encodeURIComponent(data.endDate);
        microsoftCalendarUrl += '&description=' + encodeURIComponent(data.description);
        microsoftCalendarUrl += '&location=' + encodeURIComponent(data.location);

        return microsoftCalendarUrl;
    }

    getGoogleCalendarUrl(data: AddToCalendar) {
        if(!data) return;

        var googleCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
        googleCalendarUrl += '&text=' + encodeURIComponent(data.title);
        googleCalendarUrl += '&dates=' + encodeURIComponent(data.startDate) + '/' + encodeURIComponent(data.endDate);
        googleCalendarUrl += '&details=' + encodeURIComponent(data.description);
        googleCalendarUrl += '&location=' + encodeURIComponent(data.location);

        return googleCalendarUrl;
    }

    getIcsCalendar(data: AddToCalendar) {
        if(!data) return;
        return [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'CLASS:PUBLIC',
            'DESCRIPTION:' + this.formatIcsText(data.description),
            'DTSTART:' + this.dateService.toUniversalTime(data.startDate),
            'DTEND:' + this.dateService.toUniversalTime(data.endDate),
            'LOCATION:' + this.formatIcsText(data.location),
            'SUMMARY:' + this.formatIcsText(data.title),
            'TRANSP:TRANSPARENT',
            'END:VEVENT',
            'END:VCALENDAR',
            'UID:' + this.getUid(),
            'DTSTAMP:' + this.getTimeCreated(),
            'PRODID:angular-addtocalendar'
        ].join('\n');
    }

    /**
     * Removes line breaks and ensures that the string is no
     * longer than maxLength chars (or 75 chars if none specified).
     *
     * @param  {String} s         string to sanitize
     * @param  {Number} maxLength index of string to truncate at
     * @return {String}
     */
    private formatIcsText(str: string, maxLength?: number) {
        if (!str) {
            return '';
        }
        str = str.replace(/\n/g, '\\n');

        if (maxLength)
            str = str.substring(0, maxLength);

        return str;
    }

    /**
      * Returns a random base 36 hash for iCal UID.
      * 
      * @return {String}
      */
    private getUid() {
        return Math.random().toString(36).substr(2);
    }

    /**
     * Returns a universal timestamp of current time.
     * 
     * @return {String}
     */
    private getTimeCreated() {
        return moment().format('YYYYMMDDTHHmmss');
    }

    /**
    * The name of the file will be the event title with alphanumeric chars
    * having the extension `.ics`.
    *
    * @param  {String} icsData
    * @return {Blob}
    */
    getIcsBlob(icsData) {
        return new Blob([icsData], {
            type: 'application/octet-stream'
        });
    }

    /**
    * Transforms given string to be valid file name.
    * 
    * @param  {String} title
    * @return {String}
    */
    getIcsFileName(title: string) {
        if (!title) {
            return 'event.ics';
        }
        return title.replace(/[^\w ]+/g, '') + '.ics';
    }
}