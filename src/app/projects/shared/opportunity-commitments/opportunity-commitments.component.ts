import { Component, OnInit, Input } from '@angular/core';
import { CommitmentType } from "app/projects/shared/commitment-type.enum";

@Component({
  selector: 'app-opportunity-commitments',
  templateUrl: './opportunity-commitments.component.html',
  styleUrls: ['./opportunity-commitments.component.css']
})
export class OpportunityCommitmentsComponent implements OnInit {

  @Input() private benefits: any[];
  @Input() private contributions: any[];

  constructor() {}

  ngOnInit() {}
}
