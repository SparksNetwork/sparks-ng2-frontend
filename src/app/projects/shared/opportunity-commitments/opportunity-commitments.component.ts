import { Component, OnInit, Input } from '@angular/core';
import { CommitmentType } from "app/projects/shared/commitment-type.enum";
import { IBenefitCardModel } from "app/core/models/benefit-card.model";
import { IContributionCardModel } from "app/core/models/contribution-card.model";

@Component({
  selector: 'app-opportunity-commitments',
  templateUrl: './opportunity-commitments.component.html',
  styleUrls: ['./opportunity-commitments.component.css']
})
export class OpportunityCommitmentsComponent implements OnInit {

  @Input() private benefits: IBenefitCardModel[];
  @Input() private contributions: IContributionCardModel[];

  constructor() {}

  ngOnInit() {
  }
}
