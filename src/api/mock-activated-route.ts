/**
 * @description used to mock activatedRoute as it throws error if snapshot is not defined
 */
export class MockActivatedRoute {
    data: any;  
    snapshot = {};

    constructor(data?) {
        this.data = data
    }
}