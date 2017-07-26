import { Component, OnInit, Input } from '@angular/core';
import { CardItemStatus } from "app/core/enums/card-item-status.enum";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() summary: string;
  @Input() icon: string;
  @Input() status: CardItemStatus;

  cardItemStatus = CardItemStatus;

  constructor() { }

  ngOnInit() {
  }

}
