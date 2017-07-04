import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladesComponent } from './accolades.component';
import { sharedComponents } from "app/shared/shared.module";
import { AccoladeListDetailsComponent } from "app/user-profile/accolades/accolade-list-details/accolade-list-details.component";

describe('AccoladesComponent', () => {
  let component: AccoladesComponent;
  let fixture: ComponentFixture<AccoladesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoladesComponent,sharedComponents, AccoladeListDetailsComponent ]
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
