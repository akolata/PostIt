import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../authorization/service/auth-guard.service';
import {ProfileBaseComponent, ProfilePageComponent} from './index';
import {NgModule} from '@angular/core';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileBaseComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        component: ProfilePageComponent
      },
      {
        path: ':email',
        component: ProfilePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
