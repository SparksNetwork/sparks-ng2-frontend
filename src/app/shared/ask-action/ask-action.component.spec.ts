import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskActionComponent } from './ask-action.component';

describe('AskActionComponent', () => {
  let component: AskActionComponent;
  let fixture: ComponentFixture<AskActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
