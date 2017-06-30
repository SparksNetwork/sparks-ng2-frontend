import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladesComponent } from './accolades.component';

describe('AccoladesComponent', () => {
  let component: AccoladesComponent;
  let fixture: ComponentFixture<AccoladesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoladesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
