import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCommitmentsComponent } from './opportunity-commitments.component';
import { sharedComponents } from "app/shared/shared.module";
import { InMemoryEventsService } from "test/in-memory-events.service";
import { CommitmentParty } from "app/events/shared/commitment-party.enum";

let commitmentsMock = [
  {
    type: CommitmentParty.Volunteer,
    title: '20 Karma Points',
    icon: 'glyphicon-cd',
    description: "Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network"
  }, 
  {
    type: CommitmentParty.Organizer,
    title: 'To help you community',
    icon: 'glyphicon-globe',
    description: "Serve your neightbors on the Avenue!"
  },
  {
    type: CommitmentParty.Organizer,
    title: 'Shift',
    icon: 'glyphicon-tower',
    description: "Serve your neightbors on the Avenue!"
  }
]

describe('OpportunityCommitmentsComponent', () => {
  let component: OpportunityCommitmentsComponent;
  let fixture: ComponentFixture<OpportunityCommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunityCommitmentsComponent, sharedComponents]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCommitmentsComponent);
    component = fixture.componentInstance;
    component.commitments = commitmentsMock;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should assign commitments based on commitment party', () => {
    component.ngOnChanges();
    expect(component.organizerCommitments.length).toEqual(2);
    expect(component.volunteerCommitments.length).toEqual(1);
  });
});
