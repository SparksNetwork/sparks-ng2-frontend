import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSimpleComponent } from './header-simple.component';

describe('HeaderSimpleComponent', () => {
  let component: HeaderSimpleComponent;
  let fixture: ComponentFixture<HeaderSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
