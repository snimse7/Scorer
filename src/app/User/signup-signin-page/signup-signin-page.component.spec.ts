import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSigninPageComponent } from './signup-signin-page.component';

describe('SignupSigninPageComponent', () => {
  let component: SignupSigninPageComponent;
  let fixture: ComponentFixture<SignupSigninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupSigninPageComponent]
    });
    fixture = TestBed.createComponent(SignupSigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
