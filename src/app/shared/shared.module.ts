import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { NavComponent } from './nav/nav.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddToCalendarComponent } from './add-to-calendar/add-to-calendar.component';
import { AddToCalendarService } from "./add-to-calendar/add-to-calendar.service";
import { DateService } from "app/core/date.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent, HeaderSimpleComponent,
    HeaderCarouselComponent, NavComponent, CardItemComponent,
    ScheduleComponent, AddToCalendarComponent],
  exports: [
    PageNotFoundComponent, HeaderSimpleComponent,
    HeaderCarouselComponent, NavComponent, CardItemComponent,
    ScheduleComponent, AddToCalendarComponent
  ],
  providers: [AddToCalendarService, DateService]

})
export class SharedModule { }

export const sharedComponents = [
  PageNotFoundComponent, HeaderSimpleComponent, 
  HeaderCarouselComponent, NavComponent, CardItemComponent, 
  ScheduleComponent, AddToCalendarComponent];
 export const sharedServices = [AddToCalendarService, DateService]