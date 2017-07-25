import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class OpportunityNavService {
    public projectTicketPrice: number;
    private _selectedOpportunityId: BehaviorSubject<number>;

    set selectedOpportunityId(id: number) {
        this._selectedOpportunityId.next(id);
    }

    get selectedOpportunityId() : number {
        return this._selectedOpportunityId.value;
    }

    constructor() { 
        this._selectedOpportunityId = new BehaviorSubject<number>(0);
    }

    public getSelectedOpportunityId() : Observable<number> {
        return this._selectedOpportunityId.asObservable();
    }

}