import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "app/shared/shared.module";
import { PackagesRoutingModule, routedComponents } from "./packages-routing.module";
import { PackageListComponent } from "./package-list/package-list.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PackagesRoutingModule
  ],
  declarations: [routedComponents, PackageListComponent]
})
export class PackagesModule { }
