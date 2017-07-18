import { Observable } from "rxjs/Observable";
import { CommitmentParty } from "app/projects/shared/commitment-party.enum";
import { EngagementStatus } from "app/shared/engagement-status.enum";

export class OpportunityServiceSpy {
  pendingEngagement = {
    id: 1,
    userId: 1,
    eventId: 1,
    opportunityId: 1,
    status: EngagementStatus.Applyed
  };

  activeEngagement = {
    id: 1,
    userId: 1,
    eventId: 1,
    opportunityId: 1,
    status: EngagementStatus.Confirmed
  };

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

  getUserEngagement = jasmine.createSpy('getUserEngagement').and.callFake(
    () => Observable.of(this.pendingEngagement)
  );

  getCommitments = jasmine.createSpy('getCommitments').and.callFake(
    () => Observable.of(this.commitments)
  );
}