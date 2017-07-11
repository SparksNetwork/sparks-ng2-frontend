import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommitmentParty } from "app/events/shared/commitment-party.enum";

@Component({
  selector: 'app-opportunity-commitments',
  templateUrl: './opportunity-commitments.component.html',
  styleUrls: ['./opportunity-commitments.component.css']
})
export class OpportunityCommitmentsComponent implements OnChanges {

  @Input() commitments: any[]

  organizerCommitments: any[];
  volunteerCommitments: any[];
  constructor() { }

  ngOnChanges() {
    this.assignCommitments();
  }

  /**
   * @description Assigns commitments based on commitmant party
   */
  assignCommitments() {
    if (!this.commitments) return;
    this.organizerCommitments = this.commitments.filter(x => x.type == CommitmentParty.Organizer);
    this.volunteerCommitments = this.commitments.filter(x => x.type == CommitmentParty.Volunteer);
  }
}
