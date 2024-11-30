import { CanActivateChildFn } from '@angular/router';

export const accessChildGuard: CanActivateChildFn = (childRoute, state) => {
  const userCanAccessChild = JSON.parse(
    localStorage.getItem('hasClientChildAccess') as string
  );

  if (userCanAccessChild) {
    return true;
  } else {
    return false;
  }
};
