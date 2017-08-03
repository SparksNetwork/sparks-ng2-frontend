import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarPipe } from 'app/shared/pipes/calendar.pipe';
import { QuestionComponent } from './question/question.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe, QuestionComponent],
  exports: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe
  ]

})
export class SharedModule { }

export const sharedComponents = [
  HeaderSimpleComponent, 
  HeaderCarouselComponent, CardItemComponent, 
  ScheduleComponent, CalendarPipe];