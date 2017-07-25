import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OpportunityDetailsResolver implements Resolve<any>{

    constructor(private http: Http, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let projectId = route.paramMap.get("id");
        let opportunityId = route.paramMap.get("oppId");

        if (isNaN(+opportunityId)) {
            console.log(`Opportunity id was not a number: ${opportunityId}`);
            this.router.navigate([`/projects/${projectId}`]);
            return Observable.of(null);
        }

        //TODO use Stevo's service and models
        return <Observable<any[]>>this.http.get(`api/opps?id=${opportunityId}`)
            .map(res => this.extractData<any>(res))
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/projects', projectId]);
                return Observable.of(null);
            });
    }

    private extractData<T>(res: Response) : T {
        if (res.status < 200 || res.status >= 300 || !res.json) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();

        if (!body) {
            throw new Error('Bad response status: ' + res.status);
        }

        return <T>(body && body.data && body.data.length > 0 ? body.data[0] : {});
    }
}