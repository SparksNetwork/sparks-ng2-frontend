import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OpportunityComponent } from './opportunity/opportunity.component';
import { OpportunitiesComponent } from "app/projects/opportunities/opportunities.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: OpportunitiesComponent,
                children: [
                    {
                        path: ':opportunityId',
                        component: OpportunityComponent
                    },
                ]
            }
        ]),
        SharedModule
    ], exports: [RouterModule],

})
export class OpportunitiesRoutingModule { }

export const routedComponents = [OpportunityComponent, OpportunitiesComponent]