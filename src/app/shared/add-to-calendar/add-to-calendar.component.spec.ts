import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCalendarComponent } from './add-to-calendar.component';

describe('AddToCalendarComponent', () => {
  let component: AddToCalendarComponent;
  let fixture: ComponentFixture<AddToCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCalendarComponent ]
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
