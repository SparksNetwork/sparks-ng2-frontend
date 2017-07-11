import { Observable } from "rxjs/Observable";
import { CommitmentParty } from "app/events/shared/commitment-party.enum";

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
      type: CommitmentParty.Volunteer,
      title: '20 Karma Points',
      icon: 'glyphicon-cd',
      description: "Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network"
    },
    {
      type: CommitmentParty.Volunteer,
      title: 'To help you community',
      icon: 'glyphicon-globe',
      description: "Serve your neightbors on the Avenue!"
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
  ];

  getUserEngagements = jasmine.createSpy('getUserEngagements').and.callFake(
    () => Observable.of(this.engagements)
  );

  getCommitments = jasmine.createSpy('getCommitments').and.callFake(
    () => Observable.of(this.commitments)
  );
}