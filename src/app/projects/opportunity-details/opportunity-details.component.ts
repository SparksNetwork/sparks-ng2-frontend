import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OpportunityNavService } from "app/projects/opportunity/opportunity-nav.service";
import { OpportunityService } from "app/core/services/opportunity.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.css']
})
export class OpportunityDetailsComponent implements OnInit {

  private opportunity: any;
  private projectTicketPrice: number;
  private opportunityCommitments: any;

  constructor(private route: ActivatedRoute, private OpportunityNavService: OpportunityNavService, private opportunityService: OpportunityService) { 
  }

  ngOnInit() {
    this.route.data.subscribe((data: { opportunity: any }) => {
      this.opportunity = data.opportunity;
      this.projectTicketPrice = this.OpportunityNavService.projectTicketPrice;

      this.OpportunityNavService.selectedOpportunityId = this.opportunity.id;
      
      this.getOpportunityCommitments(this.opportunity.id);
    });
  }

  /**
   * @description Gets the commitments for the given opportunity
   * @param opportunityId 
   */
  private getOpportunityCommitments(opportunityId: number) : void {
    this.opportunityService.getCommitments(opportunityId).subscribe(data => {
      this.opportunityCommitments = data;
    });
  }

}
