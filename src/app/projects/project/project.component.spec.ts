import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { ProjectComponent } from './project.component';
import { OpportunityService } from "app/core/services/opportunity.service";
import { OpportunityServiceSpy } from "test/opportunity.service.spy";
import { CardItemType } from "app/shared/card-item/card-item.enum";
import { ProjectsModule } from "app/projects/projects.module";
import { ActivatedRouteStub } from "test/router-stubs";
import { UsertAssignmentsServiceSpy } from "test/user-assignments.spy";
import { UserAssignmentService } from "app/core/services/user-assignments.service";
import { projectDetails } from "test/project-details.mock";
import { DateService } from "app/core/services/date.service";

let activatedRoute: ActivatedRouteStub;
let component: ProjectComponent;
let fixture: ComponentFixture<ProjectComponent>;

describe('ProjectComponent', () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        ProjectsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: OpportunityService, useValue: {} },
        DateService
      ]
    })// Override component's own provider
      .overrideComponent(ProjectComponent, {
        set: {
          providers: [
            { provide: OpportunityService, useClass: OpportunityServiceSpy },
            { provide: UserAssignmentService, useClass: UsertAssignmentsServiceSpy }
          ]
        }
      })
      .compileComponents();
  }));

  describe("setup", projectComponetSetup)
  describe("when navigating to project with only one opportunity", oneOpportunitySetup)
  describe("when navigating to project with multiple opportunities", multipleOpportunitiesSetup)

});

function projectComponetSetup() {
  beforeEach(() => {
    activatedRoute.data = Observable.of({ project: projectDetails.multipleOpps });
    createComponent();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should assign project details when route is resolved', () => {
    expect(component.project).toBeTruthy();
  });
}

function oneOpportunitySetup() {
  let osSpy;

  beforeEach(async(() => {
    activatedRoute.data = Observable.of({ project: projectDetails.oneOpp });
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
    activatedRoute.data = Observable.of({ project: projectDetails.multipleOpps });
    createComponent();
    osSpy = fixture.debugElement.injector.get(OpportunityService) as any;
    fixture.detectChanges();
    console.log(component);
  }));

  it('should get engagement', () => {
    expect(osSpy.getUserEngagement).toHaveBeenCalledTimes(1);
  });

  it('should set oportunity cards type to disabled if one engagement is pending', () => {
    component.setProjectOpportunitiesCardType(osSpy.pendingEngagement);    
    expect(component.opportunityCards.filter(x => x.type == CardItemType.Disabled).length).toEqual(component.opportunityCards.length - 1, "card item type not set to disabled");
  });

  it('should set oportunity cards type to null if one engagement is active', () => {
    component.setProjectOpportunitiesCardType(osSpy.activeEngagement);    
    expect(component.opportunityCards.filter(x => !x.type).length).toEqual(component.opportunityCards.length - 1, "card item type not set to disabled");
  });

  it('should no get opportunityCommitments', () => {
    expect(osSpy.getCommitments).not.toHaveBeenCalled();
    expect(component.opportunityCommitments).not.toBeTruthy();
  });

  //TODO should set corect card item type
}

function createComponent() {
  fixture = TestBed.createComponent(ProjectComponent);
  component = fixture.componentInstance;
}