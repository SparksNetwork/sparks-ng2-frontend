import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCommitmentsComponent } from './opportunity-commitments.component';
import { sharedComponents } from "app/shared/shared.module";
import { InMemoryProjectsService } from "test/in-memory-projects.service";
import { CommitmentType } from "app/projects/shared/commitment-type.enum";

let commitmentsMock = [
  {
    type: CommitmentType.Benefit,
    title: '20 Karma Points',
    icon: 'glyphicon-cd',
    description: "Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network"
  }, 
  {
    type: CommitmentType.Contribution,
    title: 'To help you community',
    icon: 'glyphicon-globe',
    description: "Serve your neightbors on the Avenue!"
  },
  {
    type: CommitmentType.Contribution,
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

    expect(component.contributions.length).toEqual(2);
    expect(component.benefits.length).toEqual(1);
  });
});
