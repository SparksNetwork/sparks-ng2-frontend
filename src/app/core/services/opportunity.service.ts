import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';
import { IOpportunityCommitmentsModel } from 'app/core/models/opportunity-commitments.model';
import { IUserEngagementModel } from 'app/core/models/user-engagement.model';

@Injectable()
export class OpportunityService {

    constructor(private db: AngularFireDatabase) { }

    /**
     * Gets the user's engagements for the project. The engagement contains information about the opportunity that the user applied for.
     *
     * @param userUID The user ID
     * @param projectKey The project key
     */
    public getUserEngagements(userUID: string, projectKey: string): Observable<IUserEngagementModel[]> {
        return this.db.list('/Engagements', {
            query: {
                orderByChild: 'projectUserKey',
                equalTo: `${projectKey}-${userUID}`
            }
        });
    }

    /**
     * Gets the opportunity commitments (benefits and contributions) based on the oppportunityKey.
     * @param oppportunityKey
     */
    public getCommitments(oppportunityKey: string): Observable<IOpportunityCommitmentsModel[]> {
        return this.db.list('/OpportunityCommitments', {
            query: {
                orderByChild: 'opportunityKey',
                equalTo: oppportunityKey
            }
        });
    }
}
