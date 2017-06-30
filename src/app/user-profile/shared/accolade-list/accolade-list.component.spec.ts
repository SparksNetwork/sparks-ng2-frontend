import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoladeListComponent } from './accolade-list.component';

describe('AccoladeListComponent', () => {
  let component: AccoladeListComponent;
  let fixture: ComponentFixture<AccoladeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoladeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoladeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
