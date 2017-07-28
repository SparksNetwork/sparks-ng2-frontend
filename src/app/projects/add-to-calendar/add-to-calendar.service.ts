import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { AddToCalendar } from 'app/projects/add-to-calendar/add-to-calendar.model';
import { ILocationModel } from 'app/core/models/location.model';
import { LocationPipe } from 'app/shared/pipes/location.pipe';

@Injectable()
export class AddToCalendarService {

    constructor(private locationPipe: LocationPipe) { }

    getMicrosoftCalendarUrl(data: AddToCalendar) {
        if (!data) {
            return;
        }

        let microsoftCalendarUrl = 'http://calendar.live.com/calendar/calendar.aspx?rru=addevent';
        microsoftCalendarUrl += '&summary=' + encodeURIComponent(data.title);
        microsoftCalendarUrl += '&dtstart=' + encodeURIComponent(data.startDate) + '&dtend=' + encodeURIComponent(data.endDate);
        microsoftCalendarUrl += '&description=' + encodeURIComponent(data.description);
        microsoftCalendarUrl += '&location=' + encodeURIComponent(this.locationPipe.transform(data.location));

        return microsoftCalendarUrl;
    }

    getGoogleCalendarUrl(data: AddToCalendar) {
        if (!data) {
            return;
        }

        let googleCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
        googleCalendarUrl += '&text=' + encodeURIComponent(data.title);
        googleCalendarUrl += '&dates=' + encodeURIComponent(data.startDate) + '/' + encodeURIComponent(data.endDate);
        googleCalendarUrl += '&details=' + encodeURIComponent(data.description);
        googleCalendarUrl += '&location=' + encodeURIComponent(this.locationPipe.transform(data.location));

        return googleCalendarUrl;
    }

    getIcsCalendar(data: AddToCalendar) {
        if (!data) {
            return;
        }
        return [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'CLASS:PUBLIC',
            'DESCRIPTION:' + this.formatIcsText(data.description),
            'DTSTART:' + this.toUniversalTime(data.startDate),
            'DTEND:' + this.toUniversalTime(data.endDate),
            'LOCATION:' + this.formatIcsText(this.locationPipe.transform(data.location)),
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

        if (maxLength) {
            str = str.substring(0, maxLength);
        }

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

    /**
     * Format time as a universal timestamp format w.r.t. the given timezone.
     *
     * @param  {String} timestamp valid RFC-2822 string timestamp
     * @param  {String} timezone  tz offset (in minutes) (optional)
     * @return {String}
     */
    toUniversalTime(timestamp: string, timezone?: number): string {
        if (!timestamp) {
            return '';
        }

        const dt = moment(timestamp);

        if (timezone) {
            dt.utcOffset(timezone);
        }
        return dt.format('YYYYMMDDTHHmmss');
    }

}
