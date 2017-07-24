import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBadgeComponent } from './confirm-badge.component';

describe('ConfirmBadgeComponent', () => {
  let component: ConfirmBadgeComponent;
  let fixture: ComponentFixture<ConfirmBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
