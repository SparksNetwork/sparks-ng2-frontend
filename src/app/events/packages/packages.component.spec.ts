import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { PackagesComponent } from './packages.component';
import { sharedComponents } from "app/shared/shared.module";
import { ActivatedRouteStub } from "test/router-stubs";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

describe('PackagesComponent', () => {
  let component: PackagesComponent;
  let fixture: ComponentFixture<PackagesComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PackagesComponent, sharedComponents],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },        
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.data = Observable.of({ opps: [] });

    fixture = TestBed.createComponent(PackagesComponent);
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
