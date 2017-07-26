import { CardItemStatus } from "app/core/enums/card-item-status.enum";

export interface ICardModel {
    title: string;
    description: string;
    icon?: string;
    status?: CardItemStatus
}