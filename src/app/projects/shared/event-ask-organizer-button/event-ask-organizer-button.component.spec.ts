import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAskOrganizerButtonComponent } from './event-ask-organizer-button.component';

describe('EventAskOrganizerButtonComponent', () => {
  let component: EventAskOrganizerButtonComponent;
  let fixture: ComponentFixture<EventAskOrganizerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAskOrganizerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAskOrganizerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
