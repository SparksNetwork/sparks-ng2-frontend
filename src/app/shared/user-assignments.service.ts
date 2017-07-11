import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserAssignmentService {
    constructor(private http: Http){}
    /**
     * @description Gets oppportunities on which user applied
     */
    getForEngagement(userId: number, engagementId: number) {
        return <Observable<any>>this.http.get(`api/userAssignments?userId=${userId}&engagementId=${engagementId}`)
            .map(res => {
                let data = this.extractData<any>(res);

                if (!data.length)
                    return Observable.of(null);

                return data[0].assignments;
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