import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommitmentType } from "app/projects/shared/commitment-type.enum";

@Component({
  selector: 'app-opportunity-commitments',
  templateUrl: './opportunity-commitments.component.html',
  styleUrls: ['./opportunity-commitments.component.css']
})
export class OpportunityCommitmentsComponent implements OnChanges {

  @Input() commitments: any[]

  contributions: any[];
  benefits: any[];
  constructor() { }

  ngOnChanges() {
    this.assignCommitments();
  }

  /**
   * @description Assigns commitments based on commitmant party
   */
  assignCommitments() {
    if (!this.commitments) return;
    this.contributions = this.commitments.filter(x => x.type == CommitmentType.Contribution);
    this.benefits = this.commitments.filter(x => x.type == CommitmentType.Benefit);
  }
}
