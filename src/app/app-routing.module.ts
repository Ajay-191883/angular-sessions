import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './main/child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './shared/guards/auth.guard';
import { canLeavePageGuard } from './shared/guards/can-leave-page.guard';
import { accessChildGuard } from './shared/guards/access-child.guard';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  // {
  //   path: 'services/:serviceId',
  //   component: MainComponent,
  //   data: { pageTitle: 'SERVICES' },
  // },
  // {
  //   path: 'clients',
  //   component: HeaderComponent,
  //   children: [
  //     {
  //       path: 'clientA',
  //       component: ChildComponent,
  //     },
  //     {
  //       path: '**',
  //       redirectTo: 'clientA',
  //     },
  //   ],
  //   canActivate: [authGuard],
  //   canDeactivate: [canLeavePageGuard],
  //   canActivateChild: [accessChildGuard],
  // },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
