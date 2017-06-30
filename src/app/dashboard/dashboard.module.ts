import { NgModule } from '@angular/core';

import { EventCardComponent } from './event-card/event-card.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule
    ],
    declarations: [EventCardComponent, UserHeaderComponent, routedComponents]
})
export class DashboardModule { }