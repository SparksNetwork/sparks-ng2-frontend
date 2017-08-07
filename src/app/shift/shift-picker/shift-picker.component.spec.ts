import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftPickerComponent } from './shift-picker.component';

describe('ShiftPickerComponent', () => {
  let component: ShiftPickerComponent;
  let fixture: ComponentFixture<ShiftPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
