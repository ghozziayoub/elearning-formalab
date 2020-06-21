import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassroomComponent } from './list-classroom.component';

describe('ListClassroomComponent', () => {
  let component: ListClassroomComponent;
  let fixture: ComponentFixture<ListClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
