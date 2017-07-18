import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageComponent } from './package.component';
import { sharedComponents } from "app/shared/shared.module";

describe('PackageComponent', () => {
  let component: PackageComponent;
  let fixture: ComponentFixture<PackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
