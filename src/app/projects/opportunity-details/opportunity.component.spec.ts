import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDetailsComponent } from './opportunity-details.component';
import { sharedComponents } from "app/shared/shared.module";

describe('OpportunityDetailsComponent', () => {
  let component: OpportunityDetailsComponent;
  let fixture: ComponentFixture<OpportunityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityDetailsComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
