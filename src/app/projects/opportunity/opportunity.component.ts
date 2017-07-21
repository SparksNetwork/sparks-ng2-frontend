import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OpportunityHeaderService } from "app/projects/opportunity-header/opportunity-header.service";
import { OpportunityService } from "app/core/services/opportunity.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  private opportunity: any;
  private projectTicketPrice: number;
  private opportunityCommitments: any;

  constructor(private route: ActivatedRoute, private opportunityHeaderService: OpportunityHeaderService, private opportunityService: OpportunityService) { 
  }

  ngOnInit() {
    this.route.data.subscribe((data: { opportunity: any }) => {
      this.opportunity = data.opportunity;
      this.projectTicketPrice = this.opportunityHeaderService.projectTicketPrice;

      this.opportunityHeaderService.selectedOpportunityId = this.opportunity.id;
      
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
