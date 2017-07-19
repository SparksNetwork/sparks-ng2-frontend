import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "app/shared/shared.module";
import { OpportunitiesRoutingModule, routedComponents } from "./opportunities-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OpportunitiesRoutingModule
  ],
  declarations: [routedComponents]
})
export class OpportunitiesModule { }
