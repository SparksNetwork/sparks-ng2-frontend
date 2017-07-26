import { ICardModel } from "app/core/models/card.model";

export interface IOpportunityCommitmentsModel {
    opportunityKey: string;
    benefits: ICardModel[];
    contributions: ICardModel[];
}