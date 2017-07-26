import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IProjectModel } from "app/core/models/project.model";
import { ErrorHandlerService } from "app/core/services/error-handler.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProjectService {

    constructor(private db: AngularFireDatabase, private errorHandlerService: ErrorHandlerService) { }

    public getProject(id: string): Observable<IProjectModel> {
        return this.db.object(`/Projects/${id}`);
    }
}