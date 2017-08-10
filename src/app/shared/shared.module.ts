import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { CardItemComponent } from './card-item/card-item.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarPipe } from 'app/shared/pipes/calendar.pipe';
import { QuestionComponent } from './question/question.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AskActionComponent } from './ask-action/ask-action.component';

import { AskQuestionComponent } from './ask-question/ask-question.component';
import { SuggestedQaComponent } from './suggested-qa/suggested-qa.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe, QuestionComponent, AskActionComponent, AskQuestionComponent, SuggestedQaComponent],
  exports: [
    HeaderSimpleComponent,
    HeaderCarouselComponent, CardItemComponent,
    ScheduleComponent, CalendarPipe, AskActionComponent
  ]

})
export class SharedModule { }

export const sharedComponents = [
  HeaderSimpleComponent, 
  HeaderCarouselComponent, CardItemComponent, 
  ScheduleComponent, CalendarPipe];