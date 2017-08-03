import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageQaComponent } from 'app/qa/page-qa/page-qa.component';
import { QaDetailsComponent } from 'app/qa/qa-details/qa-details.component';
import { SentConfirmationComponent } from 'app/qa/sent-confirmation/sent-confirmation.component';


const routes: Routes = [
    {
        path: '',
        component: PageQaComponent,
    },
    {
        path: ':projectId',
        component: PageQaComponent
    },
    {
        path: ':projectId/details/:id',
        component: QaDetailsComponent
    },
    {
        path: ':projectId/confirm',
        component: SentConfirmationComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class QARoutingModule { }

export const routedComponents = [PageQaComponent, QaDetailsComponent];
