import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // LOGIC TO BLOCK
  console.log(
    'BEFORE CLIENT',
    JSON.parse(localStorage.getItem('hasAccess') as string)
  );

  const userIsAllowed = JSON.parse(localStorage.getItem('hasAccess') as string);

  if (userIsAllowed) {
    return true;
  } else {
    return false;
  }
};
