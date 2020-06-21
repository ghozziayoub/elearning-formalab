import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClassroomComponent } from './detail-classroom.component';

describe('DetailClassroomComponent', () => {
  let component: DetailClassroomComponent;
  let fixture: ComponentFixture<DetailClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
