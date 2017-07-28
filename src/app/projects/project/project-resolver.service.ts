import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import { IProjectModel } from 'app/core/models/project.model';
import { ProjectService } from 'app/core/services/project.service';
import { OpportunityService } from 'app/core/services/opportunity.service';
import { IUserEngagementModel } from 'app/core/models/user-engagement.model';

export interface ProjectPageSources {
  projectObservable: Observable<IProjectModel>,
  engagementsObservable: Observable<IUserEngagementModel[]>
}

@Injectable()
export class ProjectResolver implements Resolve<ProjectPageSources> {

    constructor(private http: Http, private router: Router, private projectService: ProjectService,
        private opportunityService: OpportunityService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectPageSources> {
        const id = route.paramMap.get('id');

        const projectObservable = this.projectService.getProject(id);

        // TODO use the user UID of the logged in user as fist parameter
        const engagementsObservable = this.opportunityService.getUserEngagements('0', id);

        const data = {
            projectObservable,
            engagementsObservable
        };
        return Observable.combineLatest(projectObservable, engagementsObservable)
            .map(() => data)
            .first();
    }
}
