import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedShiftsComponent } from './selected-shifts.component';

describe('SelectedShiftsComponent', () => {
  let component: SelectedShiftsComponent;
  let fixture: ComponentFixture<SelectedShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
