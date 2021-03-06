import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophiesComponent } from './trophies.component';
import { sharedComponents } from "app/shared/shared.module";
import { TrophyListDetailsComponent } from "app/user-profile/trophies/trophy-list-details/trophy-list-details.component";

describe('TrophiesComponent', () => {
  let component: TrophiesComponent;
  let fixture: ComponentFixture<TrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophiesComponent, sharedComponents, TrophyListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
