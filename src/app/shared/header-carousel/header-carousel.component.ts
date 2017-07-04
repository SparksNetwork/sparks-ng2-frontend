import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {
  @Input() images: string[];

  constructor() { }

  ngOnInit() {
  }

}
