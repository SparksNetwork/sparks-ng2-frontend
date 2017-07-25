import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTeamsComponent } from './selected-teams.component';

describe('SelectedTeamsComponent', () => {
  let component: SelectedTeamsComponent;
  let fixture: ComponentFixture<SelectedTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
