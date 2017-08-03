import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageQaComponent } from './page-qa/page-qa.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { SuggestedQaComponent } from './suggested-qa/suggested-qa.component';
import { SentConfirmationComponent } from './sent-confirmation/sent-confirmation.component';
import { QaDetailsComponent } from './qa-details/qa-details.component';
import { QARoutingModule } from "app/qa/qa-routing.module";

@NgModule({
  imports: [
    CommonModule,
    QARoutingModule
  ],
  declarations: [PageQaComponent, AskQuestionComponent, SuggestedQaComponent, SentConfirmationComponent, QaDetailsComponent]
})
export class QAModule { }
