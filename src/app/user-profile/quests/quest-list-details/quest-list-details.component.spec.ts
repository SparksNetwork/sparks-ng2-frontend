import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestListDetailsComponent } from './quest-list-details.component';

describe('QuestListDetailsComponent', () => {
  let component: QuestListDetailsComponent;
  let fixture: ComponentFixture<QuestListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
