import { ILocationModel } from "app/core/models/location.model";

export class AddToCalendar {
    startDate: string;
    endDate: string;
    title: string
    location: ILocationModel;
    description: string;
}