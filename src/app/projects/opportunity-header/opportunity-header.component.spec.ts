import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityHeaderComponent } from './opportunity-header.component';

describe('OpportunityHeaderComponent', () => {
  let component: OpportunityHeaderComponent;
  let fixture: ComponentFixture<OpportunityHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
