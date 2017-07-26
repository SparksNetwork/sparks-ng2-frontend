import { ICardModel } from "app/core/models/card.model";

export interface IContributionCardModel extends ICardModel {
    contributionKey: string;
}