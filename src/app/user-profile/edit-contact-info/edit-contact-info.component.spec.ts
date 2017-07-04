import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactInfoComponent } from './edit-contact-info.component';
import { sharedComponents } from "app/shared/shared.module";

describe('EditContactInfoComponent', () => {
  let component: EditContactInfoComponent;
  let fixture: ComponentFixture<EditContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactInfoComponent, sharedComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
