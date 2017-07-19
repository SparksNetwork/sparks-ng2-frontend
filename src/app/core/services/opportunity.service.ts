import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OpportunityService {

    constructor(private http: Http) { }

    /**
     * @description Gets oppportunities on which user applied
     */
    getUserEngagement(userId: number, projectId: number) {
        return <Observable<any>>this.http.get(`api/userEngagements?userId=${userId}&projectId=${projectId}`)
            .map(res => {
                let data = this.extractData<any>(res);

                if (!data.length)
                    return Observable.of(null);

                return data[0];
            })
            .catch(exception => {
                //TODO treat exception;
                console.log(exception);
                return Observable.of(false);
            });
    }

    getCommitments(projectId: number, oppportunityId: number) {
        return <Observable<any>>this.http.get(`api/opportunityCommitments?projectId=${projectId}&opportunityId=${oppportunityId}`)
            .map(res => {
                let data = this.extractData<any>(res);

                if (!data.length)
                    return Observable.of(null);

                return data[0].commitments;
            })
            .catch(exception => {
                //TODO treat exception;
                console.log(exception);
                return Observable.of(false);
            });
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body.data || []);
    }
} 