import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCommitmentsComponent } from './opportunity-commitments.component';
import { sharedComponents } from "app/shared/shared.module";

describe('OpportunityCommitmentsComponent', () => {
  let component: OpportunityCommitmentsComponent;
  let fixture: ComponentFixture<OpportunityCommitmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityCommitmentsComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
