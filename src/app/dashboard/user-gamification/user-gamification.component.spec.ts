import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGamificationComponent } from './user-gamification.component';

describe('UserGamificationComponent', () => {
  let component: UserGamificationComponent;
  let fixture: ComponentFixture<UserGamificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGamificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGamificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
