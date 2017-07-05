import { Injectable } from "@angular/core";
import * as moment from 'moment';

@Injectable()
export class DateService {
    /**
     * Format time as a universal timestamp format w.r.t. the given timezone.
     * 
     * @param  {String} timestamp valid RFC-2822 string timestamp
     * @param  {String} timezone  tz offset (in minutes) (optional)
     * @return {String}
     */
    toUniversalTime(timestamp: string, timezone?: number) {
        let dt = moment(timestamp);

        if (timezone) {
            dt.utcOffset(timezone);
        }
        return dt.format('YYYYMMDDTHHmmss');
    }
}