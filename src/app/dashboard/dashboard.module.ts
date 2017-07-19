import { NgModule } from '@angular/core';

import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule
    ],
    declarations: [DashboardProjectsComponent, UserHeaderComponent, routedComponents]
})
export class DashboardModule { }