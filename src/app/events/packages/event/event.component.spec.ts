import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { EventComponent } from './event.component';
import { OpportunityService } from "app/events/shared/opportunity.service";
import { OpportunityServiceSpy } from "test/opportunity.service.spy";
import { CardItemType } from "app/shared/card-item/card-item.enum";
import { EventsModule } from "app/events/events.module";
import { ActivatedRouteStub } from "test/router-stubs";
import { UsertAssignmentsServiceSpy } from "test/user-assignments.spy";
import { UserAssignmentService } from "app/shared/user-assignments.service";
import { eventDetails } from "test/event-details.mock";

let activatedRoute: ActivatedRouteStub;
let component: EventComponent;
let fixture: ComponentFixture<EventComponent>;

describe('EventComponent', () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        EventsModule,        
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: OpportunityService, useValue: {} }
      ]
    })// Override component's own provider
      .overrideComponent(EventComponent, {
        set: {
          providers: [
            { provide: OpportunityService, useClass: OpportunityServiceSpy },
            { provide: UserAssignmentService, useClass: UsertAssignmentsServiceSpy }
          ]
        }
      })
      .compileComponents();
  }));

  describe("setup", eventComponetSetup)
  describe("when navigating to event with only one opportunity", oneOpportunitySetup)
  describe("when navigating to event with multiple opportunities", multipleOpportunitiesSetup)

});

function eventComponetSetup() {
  beforeEach(() => {
    activatedRoute.data = Observable.of({ event: eventDetails.multipleOpps });
    createComponent();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should assign event details when route is resolved', () => {
    expect(component.event).toBeTruthy();
  });
}

function oneOpportunitySetup() {
  let osSpy;

  beforeEach(async(() => {
    activatedRoute.data = Observable.of({ event: eventDetails.oneOpp });
    createComponent();
    osSpy = fixture.debugElement.injector.get(OpportunityService) as any;
    fixture.detectChanges();
  }));

  it('should get opportunity commitments', () => {    
    expect(osSpy.getCommitments).toHaveBeenCalledTimes(1);
  })

  it('should assign opportunity commitments', fakeAsync(() => {
    expect(component.opportunityCommitments).toBe(osSpy.commitments, 'commitments were not assigned');
  }))
}

function multipleOpportunitiesSetup() {
  let getOpportunityCommitmentsSpy;
  let osSpy: OpportunityServiceSpy;

  beforeEach(async(() => {
    activatedRoute.data = Observable.of({ event: eventDetails.multipleOpps });
    createComponent();
    osSpy = fixture.debugElement.injector.get(OpportunityService) as any;
    fixture.detectChanges();   
  }));

  it('should get engagement', () => {
    expect(osSpy.getUserEngagement).toHaveBeenCalledTimes(1);
  });

  it('should set oportunity cards type to disabled if one engagement is pending', () => {
    component.setEventOpportunitiesCardType(osSpy.pendingEngagement);    
    expect(component.opportunityCards.filter(x => x.type == CardItemType.Disabled).length).toEqual(component.opportunityCards.length - 1, "card item type not set to disabled");
  });

  it('should set oportunity cards type to null if one engagement is active', () => {
    component.setEventOpportunitiesCardType(osSpy.activeEngagement);    
    expect(component.opportunityCards.filter(x => !x.type).length).toEqual(component.opportunityCards.length - 1, "card item type not set to disabled");
  });

  it('should no get opportunityCommitments', () => {
    expect(osSpy.getCommitments).not.toHaveBeenCalled();
    expect(component.opportunityCommitments).not.toBeTruthy();
  });

  //TODO should set corect card item type
}

function createComponent() {
  fixture = TestBed.createComponent(EventComponent);
  component = fixture.componentInstance;
}