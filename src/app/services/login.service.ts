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
  };

  login() {
    localStorage.setItem('hasAccess', JSON.stringify(this.userData.hasAccess));
    return this.userData;
  }
}
