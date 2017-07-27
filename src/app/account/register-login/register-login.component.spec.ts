import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterLoginComponent } from './register-login.component';
import { AuthService } from 'app/core/services/auth.service';
import { FormBuilder } from '@angular/forms';

describe('RegisterLoginComponent', () => {
  let component: RegisterLoginComponent;
  let fixture: ComponentFixture<RegisterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [RegisterLoginComponent],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
