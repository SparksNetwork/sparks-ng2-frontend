import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftRoutingModule } from 'app/shift/shift-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { ShiftPickerComponent } from './shift-picker/shift-picker.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { SelectedShiftsComponent } from './selected-shifts/selected-shifts.component';
import { FilterShiftsComponent } from './filter-shifts/filter-shifts.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShiftRoutingModule,
    SharedModule
  ],
  declarations: [ShiftPickerComponent, PaymentDetailsComponent, PaymentConfirmComponent, 
    SelectedShiftsComponent, FilterShiftsComponent, ShiftListComponent]
})
export class ShiftModule { }
