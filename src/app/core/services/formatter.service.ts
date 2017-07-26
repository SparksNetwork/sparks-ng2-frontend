import { Injectable } from "@angular/core";
import { ILocationModel } from "app/core/models/location.model";

@Injectable()
export class FormatterService {
    constructor() {}

    public getLocationString(location: ILocationModel): string {
        if (!location) return "";

        let locStr: string = "";
        if (location.address) locStr += location.address;
        if (location.city) locStr += locStr ? `, ${location.city}` : location.city;
        if (location.state) locStr += locStr ? `, ${location.state}` : location.state;

        return locStr;
    }
}