import { CanDeactivateFn } from '@angular/router';

export const canLeavePageGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return confirm('ARE U SURE, U WANT TO LEAVE?');
  // return true;
};
