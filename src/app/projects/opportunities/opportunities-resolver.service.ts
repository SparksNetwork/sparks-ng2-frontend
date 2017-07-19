import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OpportunitiesResolver implements Resolve<any>{

    constructor(private http: Http, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let projectId = route.paramMap.get("id");

        if (isNaN(+projectId)) {
            console.log(`Project id was not a number: ${projectId}`);
            this.router.navigate(['/projects']);
            return Observable.of(null);
        }

        //TODO user Stevo service and models
        return <Observable<any[]>>this.http.get(`api/opps?projectId=${projectId}`)
            .map(res => this.extractData<any[]>(res))
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/projects', projectId]);
                return Observable.of(null);
            });
    }

    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300 || !res.json) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();

        if (!body) {
            throw new Error('Bad response status: ' + res.status);
        }

        return <T>(body && body.data || {});
    }
}