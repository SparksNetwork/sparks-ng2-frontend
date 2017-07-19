import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAskOrganizerButtonComponent } from './project-ask-organizer-button.component';

describe('ProjectAskOrganizerButtonComponent', () => {
  let component: ProjectAskOrganizerButtonComponent;
  let fixture: ComponentFixture<ProjectAskOrganizerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAskOrganizerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAskOrganizerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
