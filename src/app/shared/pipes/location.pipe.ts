import { Pipe, PipeTransform } from '@angular/core';
import { ILocationModel } from 'app/core/models/location.model';

@Pipe({ name: 'location' })
export class LocationPipe implements PipeTransform {
    transform(location: ILocationModel, forDirections: boolean = false): string {
        if (!location) {
            return ''
        };

        return forDirections ? this.getLocationForDirections(location) : this.getLocationString(location);
    }

    private getLocationString(location: ILocationModel): string {
        if (!location) {
            return ''
        };

        let locStr = '';
        if (location.address) {
            locStr += location.address
        };
        if (location.city) {
            locStr += locStr ? `, ${location.city}` : location.city
        };
        if (location.state) {
            locStr += locStr ? `, ${location.state}` : location.state;
        }
        return locStr;
    }

    private getLocationForDirections(location: ILocationModel): string {
        if (!location) {
            return ''
        };
        if (!location.latitude || !location.longitude) {
            return this.getLocationString(location);
        }
        return `${location.latitude},${location.longitude}`
    }
}
