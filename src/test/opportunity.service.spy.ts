import { Observable } from "rxjs/Observable";
import { CommitmentType } from "app/events/shared/commitment-type.enum";

export class OpportunityServiceSpy {
  engagements = [
    {
      opportunityId: 1,
      status: 1
    },
    {
      opportunityId: 2,
      status: 2
    },
    {
      opportunityId: 3,
      status: 3
    }
  ];

  commitments = [
    {
      type: CommitmentType.Get,
      title: '20 Karma Points',
      icon: 'glyphicon-cd',
      description: "Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network"
    },
    {
      type: CommitmentType.Get,
      title: 'To help you community',
      icon: 'glyphicon-globe',
      description: "Serve your neightbors on the Avenue!"
    },
    {
      type: CommitmentType.Give,
      title: 'To help you community',
      icon: 'glyphicon-globe',
      description: "Serve your neightbors on the Avenue!"
    },
    {
      type: CommitmentType.Give,
      title: 'Shift',
      icon: 'glyphicon-tower',
      description: "Serve your neightbors on the Avenue!"
    }
  ];

  getUserEngagements = jasmine.createSpy('getUserEngagements').and.callFake(
    () => Observable.of(this.engagements)
  );

  getCommitments = jasmine.createSpy('getCommitments').and.callFake(
    () => Observable.of(this.commitments)
  );
}