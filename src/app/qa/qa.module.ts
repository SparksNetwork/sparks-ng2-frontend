import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageQaComponent } from './page-qa/page-qa.component';

import { SentConfirmationComponent } from './sent-confirmation/sent-confirmation.component';
import { QaDetailsComponent } from './qa-details/qa-details.component';
import { QARoutingModule } from "app/qa/qa-routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    QARoutingModule,
    SharedModule
  ],
  declarations: [PageQaComponent, SentConfirmationComponent, QaDetailsComponent]
})
export class QAModule { }
