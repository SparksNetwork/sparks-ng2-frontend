import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { OpportunityHeaderService } from "app/projects/opportunity-header/opportunity-header.service";

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  private opportunity: any;
  private projectTicketPrice: number;

  constructor(private route: ActivatedRoute, private opportunityHeaderService: OpportunityHeaderService) { 
  }

  ngOnInit() {
    this.route.data.subscribe((data: { opportunity: any }) => {
      this.opportunity = data.opportunity;
      this.projectTicketPrice = this.opportunityHeaderService.projectTicketPrice;

      this.opportunityHeaderService.selectedOpportunityId = this.opportunity.id;
      console.log(this.opportunity);
    });
  }

}
