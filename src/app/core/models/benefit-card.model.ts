import { ICardModel } from "app/core/models/card.model";

export interface IBenefitCardModel extends ICardModel {
    benefitKey: string;
}