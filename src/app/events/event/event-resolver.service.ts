import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        let id = route.paramMap.get('id');

        //this is just to remember to validate id or name
        if (isNaN(+id)) {
            console.log(`Event id was not a number: ${id}`);
            this.router.navigate(['/events']);
            return Observable.of(null);
        }

        let mockEvent = { title: "First Event", description: "This is the description for event." };

        return Observable.of(mockEvent).map(eventDetails => {
            if (eventDetails) {
                return eventDetails;
            }
            console.log(`Event was not found: ${id}`);
            this.router.navigate(['/events']);
            return null;
        }).catch(error => {
            console.log(`Retrieval error: ${error}`);
            this.router.navigate(['/events']);
            return Observable.of(null);
        });
    }
}
