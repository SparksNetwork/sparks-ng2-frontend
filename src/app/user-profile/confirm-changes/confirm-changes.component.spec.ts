import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmChangesComponent } from './confirm-changes.component';
import { sharedComponents } from "app/shared/shared.module";

describe('ConfirmChangesComponent', () => {
  let component: ConfirmChangesComponent;
  let fixture: ComponentFixture<ConfirmChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmChangesComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
