import {NgModule} from '@angular/core';
import {LoginComponent} from './index';
import {RouterModule, Routes} from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {}
