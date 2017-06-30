import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHistoryComponent } from './events-history.component';

describe('EventsHistoryComponent', () => {
  let component: EventsHistoryComponent;
  let fixture: ComponentFixture<EventsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
