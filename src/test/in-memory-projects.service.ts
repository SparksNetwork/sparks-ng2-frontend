import { InMemoryDbService, InMemoryBackendConfig } from "angular-in-memory-web-api";
import { CommitmentType } from "app/projects/shared/commitment-type.enum";
import { EngagementStatus } from "app/projects/shared/engagement-status.enum";

export class InMemoryProjectsService implements InMemoryDbService, InMemoryBackendConfig {
    /**
    * Creates fresh copy of data each time.
    * Safe for consuming service to morph arrays and objects.
    */
    createDb() {
        let projectdetails = [
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
                location: {
                    name: "Battery Park City, New York, NY",
                    latitude: "40.706304",
                    longitude: "-74.012657"
                },
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
                location: {
                    name: "Battery Park City, New York, NY",
                    latitude: "40.706304",
                    longitude: "-74.012657"
                },
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
            },
            {
                id: 3,
                title: "Park Cleanup Oradea",
                images: [
                    "https://placeimg.com/1140/411/animals/grayscale",
                    "https://placeimg.com/1140/411/people/grayscale",
                    "https://placeimg.com/1140/411/nature/grayscale"
                ],
                startDate: "20190304T090000",
                endDate: "20190304T210000",
                location: {
                    name: "Battery Park City, New York, NY",
                    latitude: "40.706304",
                    longitude: "-74.012657"
                },
                description: "Make Kellog Park Great Again! Help plant, paint, and beautify our community park. Si se puedes!",
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
                        title: "Volunteer",
                        subtitle: "30 Days",
                        description: "100% involvement",
                        icon: "glyphicon-cog",
                    }
                ]               
            },
            {
                id: 4,
                title: "Lucidity Crossroads",
                images: [
                    "https://placeimg.com/1140/410/animals/grayscale",
                    "https://placeimg.com/1140/410/people/grayscale",
                    "https://placeimg.com/1140/410/nature/grayscale"
                ],
                startDate: "20180202T190000",
                endDate: "20180412T210000",
                location: {
                    name: "Santa Barbara, CA",
                    latitude: "40.706304",
                    longitude: "-74.012657"
                },
                description: "Hello my magical unicorns! Come work and play with us at Lucidity Festival this year by joining the Dream Makers!",
                maxKarmaPoints: 1519,
                ticketPrice: 374,
                opportunities: [
                    {
                        id: 8,
                        title: "Regular $59",
                        subtitle: "$394 in value",
                        description: "85% discount",
                        icon: "glyphicon-cog",
                        name: "Regular"
                    },
                    {
                        id: 7,
                        title: "1-Shift $209",
                        subtitle: "$374 in value",
                        description: "45% discount",
                        icon: "glyphicon-glass",
                        name: "1-Shift"
                    },
                    {
                        id: 9,
                        title: "Pre-Event Builders",
                        subtitle: "$364 in value",
                        description: "",
                        icon: "glyphicon-music",
                        name: "Pre-Event Builders"
                    },
                    {
                        id: 10,
                        title: "Setup $59",
                        subtitle: "$444 in value",
                        description: "87% discount",
                        icon: "glyphicon-film",
                        name: "Setup"
                    },
                    {
                        id: 11,
                        title: "Teardown $59",
                        subtitle: "$444 in value",
                        description: "87% discount",
                        icon: "glyphicon-camera",
                        name: "Teardown"
                    },
                ]
            },
        ];

        let userEngagements = [
            {
                id: 1,
                userId: 1,
                projectId: 1,
                opportunityId: 1,
                status: EngagementStatus.Applyed
            },
            {
                id: 2,
                userId: 1,
                projectId: 2,
                opportunityId: 1,
                status: EngagementStatus.Accepted

            },
            {
                id: 3,
                userId: 1,
                projectId: 3,
                opportunityId: 1,
                status: EngagementStatus.Confirmed
            },
        ]

        let opportunityCommitments = [
            {
                projectId: 2,
                opportunityId: 1,
                commitments: [
                    {
                        type: CommitmentType.Benefit,
                        title: '20 Karma Points',
                        icon: 'glyphicon-cd',
                        description: "Get Badges, Accolades, and more by volunteering throuh the Sparks.Network"
                    },
                    {
                        type: CommitmentType.Benefit,
                        title: 'To help you community',
                        icon: 'glyphicon-globe',
                        description: "Serve your neightbors on the Avenue!"
                    },
                    {
                        type: CommitmentType.Contribution,
                        title: 'To help you community',
                        icon: 'glyphicon-globe',
                        description: "Serve your neightbors on the Avenue!"
                    },
                    {
                        type: CommitmentType.Contribution,
                        title: 'Shift',
                        icon: 'glyphicon-tower',
                        description: "Serve your neightbors on the Avenue!"
                    }
                ]
            },
            {
                projectId: 4,
                opportunityId: 7,
                benefits: [
                    {
                        title: "Karma Points",
                        icon: 'glyphicon-star',
                        count: 1419,
                        description: "Get Badges, Accolades, and more by volunteering throuh the Sparks.Network"
                    },
                    {
                        title: "Ticket",
                        icon: 'glyphicon-certificate',
                        value: 339,
                        count: 1,
                        description: "Full Camping Pass Plus Thursday Early Early to Lucidity Festival"
                    },
                    {
                        title: "Gifts",
                        icon: 'glyphicon-thrash',
                        value: 25,
                        description: "Exclusive Dream Maker T-shirt, Water Bottle and Mapdana"
                    },
                    {
                        title: "Food Ticket",
                        icon: 'glyphicon-cutlery',
                        value: 10,
                        count: 1,
                        description: "Exclusive Dream Maker T-shirt, Water Bottle and Mapdana"
                    },
                ],
                contributions: [
                    {
                        title: "Shift",
                        icon: 'glyphicon-dashboard',
                        count: 1,
                        description: "From four to six hours long"
                    },
                    {
                        title: "Payment",
                        icon: 'glyphicon-barcode',
                        value: 209,
                        description: "Nonrefundable ticket purchase"
                    },
                    {
                        title: "Deposit",
                        icon: 'glyphicon-piggy-bank',
                        value: 165,
                        description: "Charged only if you do not complete your commitments"
                    },
                ]
            }
        ]
        let teams = [
            {
                teamId: 1,
                opportunityId: 7,
                title: "Dirt",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, odio et hendrerit condimentum, arcu."
            }
        ]

        let userAssignments = [
            {
                userId: 1,
                engagementId: 3,
                assignments: [
                    {
                        team: {
                            id: 1,
                            name: "Health Squad"
                        },
                        shift: {
                            id: 1,
                            name: "Shift 1",
                            startDate: "20170711T190000",
                            endDate: "20180704T220000"
                        }
                    },
                    {
                        team: {
                            id: 2,
                            name: "Security Crew"
                        },
                        shift: {
                            id: 2,
                            name: "Shift 2",
                            startDate: "20170717T160000",
                            endDate: "20180704T180000"
                        }
                    },
                    {
                        team: {
                            id: 3,
                            name: "Health Squad"
                        },
                        shift: {
                            id: 3,
                            name: "Shift 3",
                            startDate: "20180704T120000",
                            endDate: "20180704T140000"
                        }
                    },
                ]

            }
        ];

        let opps = [
            { id: 1, projectId: 1, name: "1-Shift", summary: "45% discount" },
            { id: 2, projectId: 1, name: "Regular", summary: "85% discount" },
            { id: 3, projectId: 1, name: "Pre-Event Builders", summary: "$364 in value" },
            { id: 4, projectId: 1, name: "Setup", summary: "87% discount" },
            { id: 5, projectId: 1, name: "Teardown", summary: "87% discount" },

            { id: 6, projectId: 2, name: "Volunteer", summary: "july 21 - sep 19" },

            { id: 7, projectId: 4, name: "1-Shift", summary: "45% discount", price: 209, discountPercent: 45, 
                description: "Dip your toe in the Dream Makers. A small discount for working a signle shift." },
            { id: 8, projectId: 4, name: "Regular", summary: "85% discount", price: 59, discountPercent: 85, 
                description: "Work a few shifts during the event and get a massive ticket discount, special shwag, and meals from out delicious commissary.",
                location: {
                    address: "1 Buftea Street",
                    city: "Cluj",
                    state: "RO"
                    // "latitude": "string",
                    // "longitude": "string"
                    } },
            { id: 9, projectId: 4, name: "Pre-Event Builders", summary: "$364 in value",
                description: "Pre-Event Builders description" },
            { id: 10, projectId: 4, name: "Setup", summary: "87% discount", price: 59, discountPercent: 87,
                description: "Setup opportunity description" },
            { id: 11, projectId: 4, name: "Teardown", summary: "87% discount", price: 59, discountPercent: 87,
                description: "Teardown opportunity description" },
        ]

        return { projectdetails, userEngagements, opportunityCommitments, userAssignments, opps };
    }
}