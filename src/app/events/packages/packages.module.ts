import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackageComponent } from './package/package.component';

@NgModule({
  imports: [
    CommonModule,
    PackagesRoutingModule
  ],
  declarations: [PackageComponent]
})
export class PackagesModule { }
