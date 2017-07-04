import { Component, OnInit, Input } from '@angular/core';
import { CardItemType } from "./card-item.enum";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() icon: string;
  @Input() type: CardItemType;

  cardItemType = CardItemType;

  constructor() { }

  ngOnInit() {
  }

}
