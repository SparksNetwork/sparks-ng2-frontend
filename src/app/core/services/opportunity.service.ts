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
     * @description Gets opportunities on which the user applied
     */
    public getUserEngagement(userId: number, projectId: string) : Observable<any> {
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

    public getCommitments(oppportunityId: number) : Observable<any> {
        return <Observable<any>>this.http.get(`api/opportunityCommitments?opportunityId=${oppportunityId}`)
            .map(res => {
                let data = this.extractData<any>(res);

                if (!data.length)
                    return Observable.of(null);

                return {
                    benefits: data[0].benefits,
                    contributions: data[0].contributions
                };
            })
            .catch(exception => {
                //TODO treat exception;
                console.log(exception);
                return Observable.of(false);
            });
    }

    private extractData<T>(res: Response) : T {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body.data || []);
    }
} 