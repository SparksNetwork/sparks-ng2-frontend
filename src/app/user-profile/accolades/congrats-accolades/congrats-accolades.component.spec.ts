import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratsAccoladesComponent } from './congrats-accolades.component';

describe('CongratsAccoladesComponent', () => {
  let component: CongratsAccoladesComponent;
  let fixture: ComponentFixture<CongratsAccoladesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratsAccoladesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsAccoladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
