import { InMemoryDbService, InMemoryBackendConfig } from "angular-in-memory-web-api";

export class InMemoryEventsService implements InMemoryDbService, InMemoryBackendConfig {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let eventdetails = [
        {
            'id': 1,
            "title": "Department of Public Works",
            "images": [
                "https://placeimg.com/1140/410/animals/grayscale",
                "https://placeimg.com/1140/410/people/grayscale",
                "https://placeimg.com/1140/410/nature/grayscale"
            ],
            "startDate": "20180704T190000",
            "endDate": "20180704T210000",
            "location": "Battery Park City, New York, NY",
            "description": "Celebrate' the independence of the United States with fireworks in one of the greatest cities in the world. New line"
        },
        {
            'id': 2,
            "title": "Park Cleanup",
            "images": [
                "https://placeimg.com/1140/411/animals/grayscale",
                "https://placeimg.com/1140/411/people/grayscale",
                "https://placeimg.com/1140/411/nature/grayscale"
            ],
            "startDate": "20190304T090000",
            "endDate": "20190304T210000",
            "location": "Battery Park City, New York, NY",
            "description": "Make Kellog Park Great Again! Help plant, paint, and beautify our community park. Si se puedes!"
        }
    ];
    return { eventdetails };
  }
}