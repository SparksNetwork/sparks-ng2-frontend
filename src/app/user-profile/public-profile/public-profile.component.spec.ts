import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileComponent } from './public-profile.component';
import { sharedComponents } from "app/shared/shared.module";
import { UserHeaderComponent } from "app/user-profile/shared/user-header/user-header.component";
import { EventsHistoryComponent } from "app/user-profile/shared/events-history/events-history.component";
import { BadgeListComponent } from "app/user-profile/shared/badge-list/badge-list.component";
import { TrophyListComponent } from "app/user-profile/shared/trophy-list/trophy-list.component";
import { AccoladeListComponent } from "app/user-profile/shared/accolade-list/accolade-list.component";

describe('PublicProfileComponent', () => {
  let component: PublicProfileComponent;
  let fixture: ComponentFixture<PublicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicProfileComponent, sharedComponents, 
      UserHeaderComponent, EventsHistoryComponent, BadgeListComponent, TrophyListComponent, AccoladeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
