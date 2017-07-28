import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { SocialRegisterComponent } from './social-register.component';
import { AuthService } from 'app/core/services/auth.service';
import { FormBuilder } from '@angular/forms';

describe('SocialRegisterComponent', () => {
  let component: SocialRegisterComponent;
  let fixture: ComponentFixture<SocialRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [SocialRegisterComponent],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
