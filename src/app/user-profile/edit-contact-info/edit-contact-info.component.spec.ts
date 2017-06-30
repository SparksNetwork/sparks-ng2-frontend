import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactInfoComponent } from './edit-contact-info.component';

describe('EditContactInfoComponent', () => {
  let component: EditContactInfoComponent;
  let fixture: ComponentFixture<EditContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactInfoComponent ]
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
