import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivityDetailsComponent } from './profile-activity-details.component';
import { sharedComponents } from "app/shared/shared.module";
import { UserHeaderComponent } from "app/user-profile/shared/user-header/user-header.component";
import { QuestsComponent } from "app/user-profile/profile-activity-details/quests/quests.component";
import { BadgeListComponent } from "app/user-profile/shared/badge-list/badge-list.component";
import { TrophyListComponent } from "app/user-profile/shared/trophy-list/trophy-list.component";
import { AccoladeListComponent } from "app/user-profile/shared/accolade-list/accolade-list.component";
import { EventsHistoryComponent } from "app/user-profile/shared/events-history/events-history.component";

describe('ProfileActivityDetailsComponent', () => {
  let component: ProfileActivityDetailsComponent;
  let fixture: ComponentFixture<ProfileActivityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActivityDetailsComponent, sharedComponents, UserHeaderComponent, 
      QuestsComponent, BadgeListComponent, TrophyListComponent, AccoladeListComponent, EventsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
