import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivityDetailsComponent } from './profile-activity-details.component';

describe('ProfileActivityDetailsComponent', () => {
  let component: ProfileActivityDetailsComponent;
  let fixture: ComponentFixture<ProfileActivityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActivityDetailsComponent ]
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
