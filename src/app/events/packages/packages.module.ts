import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "app/shared/shared.module";
import { PackagesRoutingModule, routedComponents } from "app/events/packages/packages-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PackagesRoutingModule
  ],
  declarations: [routedComponents]
})
export class PackagesModule { }
