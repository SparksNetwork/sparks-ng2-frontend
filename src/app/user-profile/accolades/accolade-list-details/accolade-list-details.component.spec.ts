import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladeListDetailsComponent } from './accolade-list-details.component';

describe('AccoladeListDetailsComponent', () => {
  let component: AccoladeListDetailsComponent;
  let fixture: ComponentFixture<AccoladeListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoladeListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoladeListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
