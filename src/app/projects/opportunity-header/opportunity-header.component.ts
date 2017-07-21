import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { OpportunityHeaderService } from "app/projects/opportunity-header/opportunity-header.service";

@Component({
  selector: 'app-opportunity-header',
  templateUrl: './opportunity-header.component.html',
  styleUrls: ['./opportunity-header.component.css']
})
export class OpportunityHeaderComponent implements OnInit, OnDestroy {

  private opportunityHeaderData: any[];
  private opportunity: any;
  private opportunityIdSubscription: Subscription;

  constructor(private route: ActivatedRoute, private opportunityHeaderService: OpportunityHeaderService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { opportunityHeader: any }) => {
      if (data && data.opportunityHeader) {
        this.opportunityHeaderService.projectTicketPrice = data.opportunityHeader.projectTicketPrice;
        this.opportunityHeaderData = data.opportunityHeader.opportunities;
      }
    });

    // If property is updated outside parent
    this.opportunityIdSubscription = this.opportunityHeaderService.getSelectedOpportunityId().subscribe(id => {
        this.opportunity = this.opportunityHeaderData.find((data) => data.opportunityId == id);
    });
  }

  ngOnDestroy() {
    this.opportunityIdSubscription.unsubscribe();
  }

}
