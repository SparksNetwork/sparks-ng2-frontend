import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class OpportunityResolver implements Resolve<any>{

    constructor(private http: Http, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let projectId = route.paramMap.get("id");

        if (isNaN(+projectId)) {
            console.log(`Project id was not a number: ${projectId}`);
            this.router.navigate(['/projects']);
            return Observable.of(null);
        }

        //TODO use Stevo's service and models
        return <Observable<any[]>>this.http.get(`api/projectdetails/${projectId}`)
            .map(res => this.extractData<any[]>(res))
            .catch(error => {
                console.log(`Retrieval error: ${error}`);
                this.router.navigate(['/projects']);
                return Observable.of(null);
            });
    }

    private extractData<T>(res: Response) : any[] {
        if (res.status < 200 || res.status >= 300 || !res.json) {
            throw new Error('Bad response status: ' + res.status);
        }

        let body = res.json();

        if (!body) {
            throw new Error('Bad response status: ' + res.status);
        }

        if (body && body.data && body.data.opportunities && body.data.opportunities.length) {
            let headerData : any = {
                projectTicketPrice: body.data.ticketPrice,
                opportunities: []
            };
            body.data.opportunities.forEach(element => {
                headerData.opportunities.push({
                    opportunityId: element.id,
                    summary: element.description,
                    name: element.name
                });
            });
            return headerData;
        }
        return [];
    }
}