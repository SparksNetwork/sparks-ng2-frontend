import { EngagementStatus } from 'app/core/enums/engagement-status.enum';

export interface IUserEngagementModel {
    engagementKey: string;
    userUID: string;
    projectUserKey: string;
    opportunityKey: string;
    status: EngagementStatus;
    appliedOn: string;
    acceptedOn: string;
    confirmedOn: string;
}
