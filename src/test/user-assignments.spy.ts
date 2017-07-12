import { Observable } from "rxjs/Observable";

export class UsertAssignmentsServiceSpy {

    userAssignments = [
        {
            userId: 1,
            engagementId: 1,
            assignments: [
                {
                    team: {
                        id: 1, name: "Health Squad"
                    },
                    shift: {
                        id: 1,
                        name: "Shift 1",
                        startDate: "20180704T190000",
                        endDate: "20180704T220000"
                    }
                },
                {
                    team: {
                        id: 2, name: "Security Crew"
                    },
                    shift: {
                        id: 2,
                        name: "Shift 2",
                        startDate: "20180704T160000",
                        endDate: "20180704T180000"
                    }
                },
                {
                    team: {
                        id: 3, name: "Health Squad"
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

    getForEngagement = jasmine.createSpy('getForEngagement').and.callFake(
        () => Observable.of(this.userAssignments)
    );
}