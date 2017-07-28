import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { EmailRegisterComponent } from './email-register.component';
import { AuthService } from 'app/core/services/auth.service';
import { FormBuilder } from '@angular/forms';

describe('EmailRegisterComponent', () => {
  let component: EmailRegisterComponent;
  let fixture: ComponentFixture<EmailRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [EmailRegisterComponent],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
