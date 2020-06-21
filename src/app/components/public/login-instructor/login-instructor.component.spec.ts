import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstructorComponent } from './login-instructor.component';

describe('LoginInstructorComponent', () => {
  let component: LoginInstructorComponent;
  let fixture: ComponentFixture<LoginInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
