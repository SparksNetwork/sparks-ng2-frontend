import { NgModule } from '@angular/core';

import { EventCardComponent } from './event-card/event-card.component';
import { UserGamificationComponent } from './user-gamification/user-gamification.component';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

@NgModule({
    imports: [DashboardRoutingModule],
    declarations: [EventCardComponent, UserGamificationComponent, routedComponents]
})
export class DashboardModule { }