import { Component } from "@angular/core";
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
  selector: 'as-test-cmp',
  template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
  {
    path: '', component: TestRouterComponent
  }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        TestRouterComponent,
        AppComponent        
      ],
      imports: [
        RouterModule,
        RouterTestingModule
      ],
      providers: [provideRoutes(config)]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
