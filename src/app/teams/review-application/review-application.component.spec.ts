import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApplicationComponent } from './review-application.component';

describe('ReviewApplicationComponent', () => {
  let component: ReviewApplicationComponent;
  let fixture: ComponentFixture<ReviewApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
