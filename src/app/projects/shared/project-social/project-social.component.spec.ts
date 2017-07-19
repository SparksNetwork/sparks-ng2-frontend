import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSocialComponent } from './project-social.component';

describe('ProjectSocialComponent', () => {
  let component: ProjectSocialComponent;
  let fixture: ComponentFixture<ProjectSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
