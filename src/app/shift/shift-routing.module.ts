import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftPickerComponent } from 'app/shift/shift-picker/shift-picker.component';
import { PaymentDetailsComponent } from 'app/shift/payment-details/payment-details.component';
import { PaymentConfirmComponent } from 'app/shift/payment-confirm/payment-confirm.component';


const routes: Routes = [
    {
        path: ':oppId',
        component: ShiftPickerComponent,
    },
    {
        path: ':oppId/payment',
        component: PaymentDetailsComponent
    },
    {
        path: ':oppId/confirm',
        component: PaymentConfirmComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ShiftRoutingModule { }

export const routedComponents = [ShiftPickerComponent, PaymentDetailsComponent, PaymentConfirmComponent];
