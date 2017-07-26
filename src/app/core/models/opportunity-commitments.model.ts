import { ICardModel } from "app/core/models/card.model";
import { IBenefitCardModel } from "app/core/models/benefit-card.model";
import { IContributionCardModel } from "app/core/models/contribution-card.model";

export interface IOpportunityCommitmentsModel {
    opportunityKey: string;
    benefits: IBenefitCardModel[];
    contributions: IContributionCardModel[];
}