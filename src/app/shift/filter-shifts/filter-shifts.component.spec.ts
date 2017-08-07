import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterShiftsComponent } from './filter-shifts.component';

describe('FilterShiftsComponent', () => {
  let component: FilterShiftsComponent;
  let fixture: ComponentFixture<FilterShiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterShiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
