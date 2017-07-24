import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBadgeComponent } from './select-badge.component';

describe('SelectBadgeComponent', () => {
  let component: SelectBadgeComponent;
  let fixture: ComponentFixture<SelectBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
