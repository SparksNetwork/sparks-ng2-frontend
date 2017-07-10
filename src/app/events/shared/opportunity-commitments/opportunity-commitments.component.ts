import { Component, OnInit, Input } from '@angular/core';
import { CommitmentType } from "app/events/shared/commitment-type.enum";

@Component({
  selector: 'app-opportunity-commitments',
  templateUrl: './opportunity-commitments.component.html',
  styleUrls: ['./opportunity-commitments.component.css']
})
export class OpportunityCommitmentsComponent implements OnInit {

  @Input() commitments: any[]

  commitmentsGive: any[];
  commitmentsGet: any[]
  constructor() { }

  ngOnInit() {
    if (!this.commitments) return;
    this.commitmentsGive = this.commitments.filter(x => x.type == CommitmentType.Give);
    this.commitmentsGet = this.commitments.filter(x => x.type == CommitmentType.Get);
  }

}
