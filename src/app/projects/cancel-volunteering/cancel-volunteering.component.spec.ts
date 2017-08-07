import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelVolunteeringComponent } from './cancel-volunteering.component';

describe('CancelVolunteeringComponent', () => {
  let component: CancelVolunteeringComponent;
  let fixture: ComponentFixture<CancelVolunteeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelVolunteeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
