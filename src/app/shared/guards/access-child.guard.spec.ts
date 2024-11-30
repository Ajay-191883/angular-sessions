import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { accessChildGuard } from './access-child.guard';

describe('accessChildGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
