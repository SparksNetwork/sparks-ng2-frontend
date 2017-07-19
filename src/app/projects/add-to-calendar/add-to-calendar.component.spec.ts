import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCalendarComponent } from './add-to-calendar.component';
import { AddToCalendarService } from "app/shared/add-to-calendar/add-to-calendar.service";
import { DateService } from "app/core/date.service";

describe('AddToCalendarComponent', () => {
  let component: AddToCalendarComponent;
  let fixture: ComponentFixture<AddToCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCalendarComponent ],
      providers:[AddToCalendarService, DateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
