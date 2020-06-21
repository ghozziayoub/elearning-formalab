import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstructorsComponent } from './list-instructors.component';

describe('ListInstructorsComponent', () => {
  let component: ListInstructorsComponent;
  let fixture: ComponentFixture<ListInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
