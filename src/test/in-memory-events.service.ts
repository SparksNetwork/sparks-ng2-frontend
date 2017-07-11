import { InMemoryDbService, InMemoryBackendConfig } from "angular-in-memory-web-api";
import { CommitmentType } from "app/events/shared/commitment-type.enum";

export class InMemoryEventsService implements InMemoryDbService, InMemoryBackendConfig {
    /**
    * Creates fresh copy of data each time.
    * Safe for consuming service to morph arrays and objects.
    */
    createDb() {
        let eventdetails = [
            {
                id: 1,
                title: "Department of Public Works",
                images: [
                    "https://placeimg.com/1140/410/animals/grayscale",
                    "https://placeimg.com/1140/410/people/grayscale",
                    "https://placeimg.com/1140/410/nature/grayscale"
                ],
                startDate: "20180704T190000",
                endDate: "20180704T210000",
                location: "Battery Park City, New York, NY",
                description: "Celebrate the independence of the United States with fireworks in one of the greatest cities in the world. New line",
                maxKarmaPoints: 2600,
                opportunities: [
                    {
                        id: 1,
                        title: "Volunteer",
                        subtitle: "30 Days",
                        description: "100% involvement",
                        icon: "glyphicon-cog",
                    },
                    {
                        id: 2,
                        title: "Crew",
                        subtitle: "30 Days",
                        description: "100% involvement",
                        icon: "glyphicon-glass",
                    },
                    {
                        id: 3,
                        title: "Pre-Event Builders",
                        subtitle: "$364 in value",
                        description: "100% involvement",
                        icon: "glyphicon-music",
                    },
                    {
                        id: 4,
                        title: "Crew",
                        subtitle: "60 Days",
                        description: "100% involvement",
                        icon: "glyphicon-film",
                    },
                    {
                        id: 5,
                        title: "Teardown $59",
                        subtitle: "$444 in value",
                        description: "87% discount",
                        icon: "glyphicon-camera",
                    },
                ]
            },
            {
                id: 2,
                title: "Park Cleanup",
                images: [
                    "https://placeimg.com/1140/411/animals/grayscale",
                    "https://placeimg.com/1140/411/people/grayscale",
                    "https://placeimg.com/1140/411/nature/grayscale"
                ],
                startDate: "20190304T090000",
                endDate: "20190304T210000",
                location: "Battery Park City, New York, NY",
                description: "Make Kellog Park Great Again! Help plant, paint, and beautify our community park. Si se puedes!",
                maxKarmaPoints: 2600,
                opportunities: [
                    {
                        id: 1,
                        title: "Volunteer",
                        subtitle: "30 Days",
                        description: "100% involvement",
                        icon: "glyphicon-cog",
                    }
                ]
            }
        ];

        let userEngagements = [
            {
                userId: 1,
                eventId: 1,
                engagements: [
                    {
                        opportunityId: 1,
                        status: 1
                    },
                    {
                        opportunityId: 2,
                        status: 2
                    },
                    {
                        opportunityId: 3,
                        status: 3
                    },
                ]

            },
            {
                userId: 1,
                eventId: 2,
                engagements: [
                    {
                        opportunityId: 1,
                        status: 2
                    },
                    {
                        opportunityId: 2,
                        status: 2
                    },
                    {
                        opportunityId: 3,
                        status: 1
                    },
                ]

            },
        ]

        let opportunityCommitments = [
            {
                eventId: 2,
                opportunityId: 1,
                commitments: [
                    {
                        type: CommitmentType.Get,
                        title: '20 Karma Points',
                        icon: 'glyphicon-cd',
                        description: "Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network"
                    },
                    {
                        type: CommitmentType.Get,
                        title: 'To help you community',
                        icon: 'glyphicon-globe',
                        description: "Serve your neightbors on the Avenue!"
                    },
                    {
                        type: CommitmentType.Give,
                        title: 'To help you community',
                        icon: 'glyphicon-globe',
                        description: "Serve your neightbors on the Avenue!"
                    },
                    {
                        type: CommitmentType.Give,
                        title: 'Shift',
                        icon: 'glyphicon-tower',
                        description: "Serve your neightbors on the Avenue!"
                    }
                ]
            }

        ]
        return { eventdetails, userEngagements, opportunityCommitments };
    }
}