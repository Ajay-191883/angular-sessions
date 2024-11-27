import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canLeavePageGuard } from './can-leave-page.guard';

describe('canLeavePageGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canLeavePageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
