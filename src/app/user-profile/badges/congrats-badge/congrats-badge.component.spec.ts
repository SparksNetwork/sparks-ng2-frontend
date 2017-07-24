import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsBadgeComponent } from './congrats-badge.component';

describe('CongratsBadgeComponent', () => {
  let component: CongratsBadgeComponent;
  let fixture: ComponentFixture<CongratsBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
