import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyListComponent } from './trophy-list.component';

describe('TrophyListComponent', () => {
  let component: TrophyListComponent;
  let fixture: ComponentFixture<TrophyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
