import { ICardModel } from "app/core/models/card.model";

export interface IOpportunityCardModel extends ICardModel {
    opportunityKey: string;
    summary?: string;
}