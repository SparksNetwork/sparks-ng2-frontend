import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionConfirmComponent } from './submission-confirm.component';

describe('SubmissionConfirmComponent', () => {
  let component: SubmissionConfirmComponent;
  let fixture: ComponentFixture<SubmissionConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
