import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarPipe } from 'app/shared/pipes/calendar.pipe';
import { QuestionComponent } from './question/question.component';
import { LocationPipe } from 'app/shared/pipes/location.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe, LocationPipe, QuestionComponent],
  exports: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe, LocationPipe
  ]

})
export class SharedModule { }

export const sharedComponents = [
  HeaderSimpleComponent,
  HeaderCarouselComponent, CardItemComponent,
  ScheduleComponent, CalendarPipe, LocationPipe];
