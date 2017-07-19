import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'calendar' })
export class CalendarPipe implements PipeTransform {
    transform(value: Date): string {
        return moment(value).calendar(null, { sameElse: 'LLL' });
    }
}