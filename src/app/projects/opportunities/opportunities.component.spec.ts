import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { OpportunitiesComponent } from './opportunities.component';
import { sharedComponents } from "app/shared/shared.module";
import { ActivatedRouteStub } from "test/router-stubs";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

describe('OpportunitiesComponent', () => {
  let component: OpportunitiesComponent;
  let fixture: ComponentFixture<OpportunitiesComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OpportunitiesComponent, sharedComponents],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },        
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.data = Observable.of({ opps: [] });

    fixture = TestBed.createComponent(OpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should assign opps',()=>{
    expect(component.opps).toBeTruthy();
  })
});
