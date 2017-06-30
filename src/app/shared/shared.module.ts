import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderSimpleComponent } from './header-simple/header-simple.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent],
  exports: [PageNotFoundComponent, HeaderSimpleComponent, HeaderCarouselComponent]
})
export class SharedModule { }
