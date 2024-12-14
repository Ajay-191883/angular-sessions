import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavingsComponent } from './savings/savings.component';
import { CurrentComponent } from './current/current.component';
import { FixedDepositsComponent } from './fixed-deposits/fixed-deposits.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const accountsRoutes: Routes = [
  {
    path: 'savings',
    component: SavingsComponent,
  },
  {
    path: 'current',
    component: CurrentComponent,
  },
  {
    path: 'fd',
    component: FixedDepositsComponent,
  },
];

@NgModule({
  declarations: [SavingsComponent, CurrentComponent, FixedDepositsComponent],
  imports: [SharedModuleModule, RouterModule.forChild(accountsRoutes)],
})
export class AccountsModule {}
