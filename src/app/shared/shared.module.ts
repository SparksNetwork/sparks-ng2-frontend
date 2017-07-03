import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent, NavComponent],
  exports: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent, NavComponent]
})
export class SharedModule { }
