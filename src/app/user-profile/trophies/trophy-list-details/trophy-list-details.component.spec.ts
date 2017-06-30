import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyListDetailsComponent } from './trophy-list-details.component';

describe('TrophyListDetailsComponent', () => {
  let component: TrophyListDetailsComponent;
  let fixture: ComponentFixture<TrophyListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophyListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
