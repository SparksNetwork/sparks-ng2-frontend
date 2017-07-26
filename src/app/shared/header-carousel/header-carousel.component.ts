import { Component, OnInit, Input } from '@angular/core';
import { IImageModel } from "app/core/models/image.model";

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {
  @Input() images: IImageModel[];

  constructor() { }

  ngOnInit() {
  }

}
