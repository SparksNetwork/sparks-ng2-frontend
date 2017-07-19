import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { NavComponent } from './nav/nav.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddToCalendarComponent } from './add-to-calendar/add-to-calendar.component';
import { AddToCalendarService } from "app/core/services/add-to-calendar.service";
import { DateService } from "app/core/services/date.service";
import { UserAssignmentService } from "app/core/services/user-assignments.service";
import { CalendarPipe } from "app/core/pipes/calendar.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent, HeaderSimpleComponent,
    HeaderCarouselComponent, NavComponent, CardItemComponent,
    ScheduleComponent, AddToCalendarComponent, CalendarPipe],
  exports: [
    PageNotFoundComponent, HeaderSimpleComponent,
    HeaderCarouselComponent, NavComponent, CardItemComponent,
    ScheduleComponent, AddToCalendarComponent, CalendarPipe
  ],
  providers: [AddToCalendarService, DateService, UserAssignmentService]

})
export class SharedModule { }

export const sharedComponents = [
  PageNotFoundComponent, HeaderSimpleComponent, 
  HeaderCarouselComponent, NavComponent, CardItemComponent, 
  ScheduleComponent, AddToCalendarComponent, CalendarPipe];
 export const sharedServices = [AddToCalendarService, DateService]