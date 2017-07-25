import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsTrophyComponent } from './congrats-trophy.component';

describe('CongratsTrophyComponent', () => {
  let component: CongratsTrophyComponent;
  let fixture: ComponentFixture<CongratsTrophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsTrophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
