import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityTeamsComponent } from './opportunity-teams.component';

describe('OpportunityTeamsComponent', () => {
  let component: OpportunityTeamsComponent;
  let fixture: ComponentFixture<OpportunityTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
