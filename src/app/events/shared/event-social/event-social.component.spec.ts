import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSocialComponent } from './event-social.component';

describe('EventSocialComponent', () => {
  let component: EventSocialComponent;
  let fixture: ComponentFixture<EventSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
