import { Observable } from 'rxjs/Observable';
import { CommitmentType } from 'app/projects/shared/commitment-type.enum';
import { EngagementStatus } from 'app/core/enums/engagement-status.enum';

export class OpportunityServiceSpy {
  pendingEngagement = {
    id: 1,
    userId: 1,
    eventId: 1,
    opportunityId: 1,
    status: EngagementStatus.Applied
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
      type: CommitmentType.Benefit,
      title: '20 Karma Points',
      icon: 'glyphicon-cd',
      description: 'Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network'
    },
    {
      type: CommitmentType.Benefit,
      title: 'To help you community',
      icon: 'glyphicon-globe',
      description: 'Serve your neightbors on the Avenue!'
    },
    {
      type: CommitmentType.Contribution,
      title: 'To help you community',
      icon: 'glyphicon-globe',
      description: 'Serve your neightbors on the Avenue!'
    },
    {
      type: CommitmentType.Contribution,
      title: 'Shift',
      icon: 'glyphicon-tower',
      description: 'Serve your neightbors on the Avenue!'
    }
  ];

  getUserEngagement = jasmine.createSpy('getUserEngagement').and.callFake(
    () => Observable.of(this.pendingEngagement)
  );

  getCommitments = jasmine.createSpy('getCommitments').and.callFake(
    () => Observable.of(this.commitments)
  );
}
