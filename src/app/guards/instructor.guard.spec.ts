import { TestBed } from '@angular/core/testing';

import { InstructorGuard } from './instructor.guard';

describe('InstructorGuard', () => {
  let guard: InstructorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InstructorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
