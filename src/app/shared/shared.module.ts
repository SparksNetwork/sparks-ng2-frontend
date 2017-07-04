import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { NavComponent } from './nav/nav.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent, NavComponent, CardItemComponent],
  exports: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent, NavComponent, CardItemComponent]
})
export class SharedModule { }

export const sharedComponents = [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent, NavComponent, CardItemComponent];

