import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IProjectModel } from "app/core/models/project.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProjectService {

    constructor(private db: AngularFireDatabase) { }

    /**
     * Gets the project data based on the project key.
     * @param id The project key
     */
    public getProject(id: string): Observable<IProjectModel> {
        return this.db.object(`/Projects/${id}`);
    }
}