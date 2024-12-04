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
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesRelatedComponent } from './pipes-related/pipes-related.component';
import { HttpApiComponent } from './http-api/http-api.component';

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
    path: '',
    component: MainComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'pipe-related',
    component: PipesRelatedComponent,
  },
  {
    path: 'http-api',
    component: HttpApiComponent,
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
