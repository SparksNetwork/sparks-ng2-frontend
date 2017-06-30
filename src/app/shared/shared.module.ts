import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderSpinnerComponent } from './header-spinner/header-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, HeaderSimpleComponent, HeaderSpinnerComponent],
  exports: [PageNotFoundComponent, HeaderSimpleComponent, HeaderSpinnerComponent]
})
export class SharedModule { }
