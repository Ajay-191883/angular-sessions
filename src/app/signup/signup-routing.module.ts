import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../pages/signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';

const signupRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(signupRoutes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
