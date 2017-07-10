import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpModule } from "@angular/http";

import { sharedComponents, sharedServices } from "app/shared/shared.module";
import { OpportunityService } from "app/events/shared/opportunity.service";
import { EventSocialComponent } from "app/events/shared/event-social/event-social.component";
import { EventAskOrganizerButtonComponent } from "app/events/shared/event-ask-organizer-button/event-ask-organizer-button.component";
import { AddToCalendarService } from "app/shared/add-to-calendar/add-to-calendar.service";
import { InMemoryEventsService } from "test/in-memory-events.service";
import { Observable } from "rxjs/Observable";
import { MockActivatedRoute } from "test/mock-activated-route";
import { EventOpportunityCard } from "app/events/event/event-oportunity-card.model";
import { CardItemType } from "app/shared/card-item/card-item.enum";
import { EngagementStatus } from "app/events/shared/engagement-status.enum";
import { OpportunityCommitmentsComponent } from "app/events/shared/opportunity-commitments/opportunity-commitments.component";


let activatedRoute: MockActivatedRoute;
let component: EventComponent;
let fixture: ComponentFixture<EventComponent>;
let opportunityService;
let getUserEngagementsSpy;
let inMemoryService = new InMemoryEventsService();
let db = inMemoryService.createDb();

describe('EventComponent', () => {
  beforeEach(() => {
    activatedRoute = new MockActivatedRoute();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventComponent,
        EventSocialComponent,
        EventAskOrganizerButtonComponent,
        OpportunityCommitmentsComponent,
        sharedComponents],
      imports: [
        HttpModule,
        RouterModule,
        RouterTestingModule
      ],
      providers: [
        OpportunityService,
        sharedServices,
        {
          provide: ActivatedRoute,
          useValue: activatedRoute
        }
      ]
    })
      .compileComponents();
  }));

  describe("setup", eventComponetSetup)
  describe("when navigating to event with only one opportunity", oneOpportunitySetup)
  describe("when navigating to event with multiple opportunities", multipleOpportunitiesSetup)

});

function eventComponetSetup() {
  beforeEach(() => {
    activatedRoute.data = Observable.of({ event: db.eventdetails[0] });
    createComponent();
    spyOn(opportunityService, "getUserEngagements").and.returnValue(Observable.of(db.userEngagements[0]));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should assign event details when route is resolved', (() => {
    fixture.detectChanges();
    expect(component.event).toBeTruthy();
  }));
}

function oneOpportunitySetup() {
  let getOpportunityCommitmentsSpy;
  let commitments = db.opportunityCommitments[0].commitments;

  beforeEach(async(() => {
    activatedRoute.data = Observable.of({ event: db.eventdetails[1] });
    createComponent();
    getUserEngagementsSpy = spyOn(opportunityService, "getUserEngagements").and.returnValue(Observable.of(false));
    getOpportunityCommitmentsSpy = spyOn(opportunityService, "getCommitments").and.returnValue(Observable.of(commitments));
  }));

  it('should not get engagements', () => {
    fixture.detectChanges();
    expect(getUserEngagementsSpy.calls.count()).toBe(0, 'call to get engagement was made');
  })

  it('should get opportunityCommitments', (() => {
    fixture.detectChanges();
    expect(getOpportunityCommitmentsSpy.calls.count()).toBe(1, 'was not called once');
  }));

  it('should assign opportunityCommitments', () => {
    fixture.detectChanges();
    expect(component.opportunityCommitments).toBe(commitments, 'commitments were not assigned');
  });
}

function multipleOpportunitiesSetup() {
  let getOpportunityCommitmentsSpy;

  beforeEach(async(() => {
    activatedRoute.data = Observable.of({ event: db.eventdetails[0] });
    createComponent();
    getOpportunityCommitmentsSpy = spyOn(opportunityService, "getCommitments").and.returnValue(Observable.of(false));
  }));

  it('should enabled opportunities before getUserEngagements is called', () => {
    getUserEngagementsSpy = spyOn(opportunityService, "getUserEngagements").and.returnValue(Observable.of(false));

    fixture.detectChanges();
    expect(component.opportunityCards.every(x => !x.type)).toEqual(true, 'not all opportunities are enabled');
  });

  it('should get engagements', fakeAsync(() => {
    getUserEngagementsSpy = spyOn(opportunityService, "getUserEngagements").and.returnValue(Observable.of(false));

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(getUserEngagementsSpy.calls.count()).toBe(1, 'no call made to engagements');
  }))

  it('should set oportunity cards type to disabled if one engagement is pending', fakeAsync(() => {
    let engagements = [
      {
        opportunityId: 1,
        status: EngagementStatus.Pending
      },
    ];

    getUserEngagementsSpy = spyOn(opportunityService, "getUserEngagements").and.returnValue(Observable.of(engagements));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    console.log(component)
    expect(component.opportunityCards.filter(x => x.type == CardItemType.Disabled).length).toEqual(component.opportunityCards.length - 1, "card item type not set to disabled");
    expect(component.opportunityCards.find(x => x.id == 1).type).toEqual(CardItemType.Pending, "card item type not set to pending");
  }));

  it('should no get opportunityCommitments', (() => {
    fixture.detectChanges();
    expect(getOpportunityCommitmentsSpy.calls.count()).toBe(0, 'was called');
    expect(component.opportunityCommitments).not.toBeTruthy();
  }));
}

function createComponent() {
  fixture = TestBed.createComponent(EventComponent);
  component = fixture.componentInstance;
  opportunityService = fixture.debugElement.injector.get(OpportunityService);
}



