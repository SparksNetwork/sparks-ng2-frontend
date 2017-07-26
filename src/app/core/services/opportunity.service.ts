import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from "angularfire2/database";
import { IOpportunityCommitmentsModel } from "app/core/models/opportunity-commitments.model";

@Injectable()
export class OpportunityService {

    constructor(private db: AngularFireDatabase) { }

    /**
     * @description Gets opportunities on which the user applied
     */
    public getUserEngagement(userId: number, projectId: string) {
        // return <Observable<any>>this.http.get(`api/userEngagements?userId=${userId}&projectId=${projectId}`)
        //     .map(res => {
        //         let data = this.extractData<any>(res);

        //         if (!data.length)
        //             return Observable.of(null);

        //         return data[0];
        //     })
        //     .catch(exception => {
        //         //TODO treat exception;
        //         console.log(exception);
        //         return Observable.of(false);
        //     });
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