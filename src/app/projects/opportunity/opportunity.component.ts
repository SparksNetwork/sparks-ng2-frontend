import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { OpportunityNavService } from "app/projects/opportunity/opportunity-nav.service";

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit, OnDestroy {

  private opportunityHeaderData: any[];
  private opportunity: any;
  private opportunityIdSubscription: Subscription;

  constructor(private route: ActivatedRoute, private opportunityNavService: OpportunityNavService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { opportunityHeader: any }) => {
      if (data && data.opportunityHeader) {
        this.opportunityNavService.projectTicketPrice = data.opportunityHeader.projectTicketPrice;
        this.opportunityHeaderData = data.opportunityHeader.opportunities;
      }
    });

    // If property is updated outside parent
    this.opportunityIdSubscription = this.opportunityNavService.getSelectedOpportunityId().subscribe(id => {
        this.opportunity = this.opportunityHeaderData.find((data) => data.opportunityId == id);
    });
  }

  ngOnDestroy() {
    this.opportunityIdSubscription.unsubscribe();
  }

}
