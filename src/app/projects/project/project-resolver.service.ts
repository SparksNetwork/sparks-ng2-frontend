import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IProjectModel } from "app/core/models/project.model";
import { ProjectService } from "app/core/services/project.service";

@Injectable()
export class ProjectResolver implements Resolve<IProjectModel> {

    constructor(private http: Http, private router: Router, private projectService: ProjectService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProjectModel> {
        let id = route.paramMap.get('id');

        //this is just to remember to validate id or name
        // if (isNaN(+id)) {
        //     console.log(`Project id was not a number: ${id}`);
        //     this.router.navigate(['/projects']);
        //     return Observable.of(null);
        // }
        
        return this.projectService.getProject(id);
    }
}
