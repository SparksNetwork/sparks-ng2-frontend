import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  router: Router;

  constructor( private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
