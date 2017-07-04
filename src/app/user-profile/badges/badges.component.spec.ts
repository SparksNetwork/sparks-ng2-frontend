import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesComponent } from './badges.component';
import { sharedComponents } from "app/shared/shared.module";
import { BadgeListDetailsComponent } from "app/user-profile/badges/badge-list-details/badge-list-details.component";

describe('BadgesComponent', () => {
  let component: BadgesComponent;
  let fixture: ComponentFixture<BadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesComponent, BadgeListDetailsComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
