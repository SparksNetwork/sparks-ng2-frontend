import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileDetailsComponent } from './edit-profile-details.component';
import { sharedComponents } from "app/shared/shared.module";

describe('EditProfileDetailsComponent', () => {
  let component: EditProfileDetailsComponent;
  let fixture: ComponentFixture<EditProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileDetailsComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
