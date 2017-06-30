import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeListDetailsComponent } from './badge-list-details.component';

describe('BadgeListDetailsComponent', () => {
  let component: BadgeListDetailsComponent;
  let fixture: ComponentFixture<BadgeListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
