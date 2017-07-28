import { ProjectType } from 'app/core/enums/project-type.enum';
import { ILocationModel } from 'app/core/models/location.model';
import { IImageModel } from 'app/core/models/image.model';
import { IOrganizerModel } from 'app/core/models/organizer.model';
import { IOpportunityCardModel } from 'app/core/models/opportunity-card.model';

export interface IProjectModel {
    projectKey: string;
    projectType: ProjectType;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime?: string;
    location: ILocationModel;
    images: IImageModel[];
    ticketPrice?: number;
    maxKarmaPoints: number;
    organizer: IOrganizerModel;
    projectPageUrl?: string;
    shareKarmaPoints?: number;
    opportunities: IOpportunityCardModel[];
}
