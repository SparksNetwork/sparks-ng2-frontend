import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './packages.component.html',
})
export class PackagesComponent implements OnInit {

  opps: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { opps: any[] }) => {
      this.opps = data.opps;
    });
  }
}