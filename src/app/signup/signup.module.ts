import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SavingsComponent } from '../accounts/savings/savings.component';

@NgModule({
  declarations: [SignupComponent, LoginPageComponent],
  imports: [CommonModule, FormsModule, SignupRoutingModule],
  // exports: [SignupComponent],
})
export class SignupModule {}
