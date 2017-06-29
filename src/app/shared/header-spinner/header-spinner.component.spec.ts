import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpinnerComponent } from './header-spinner.component';

describe('HeaderSpinnerComponent', () => {
  let component: HeaderSpinnerComponent;
  let fixture: ComponentFixture<HeaderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
