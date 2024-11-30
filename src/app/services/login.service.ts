import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  userData = {
    name: 'Test',
    age: 30,
    category: 'DEVELOPER',
    hasAccess: true,
    hasClientChildAccess: true,
  };

  login() {
    localStorage.setItem('hasAccess', JSON.stringify(this.userData.hasAccess));
    localStorage.setItem(
      'hasClientChildAccess',
      JSON.stringify(this.userData.hasClientChildAccess)
    );
    return this.userData;
  }
}
