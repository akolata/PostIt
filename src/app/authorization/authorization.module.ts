import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './index';
import {AuthorizationRoutingModule} from './authorization.routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthorizationRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AuthorizationModule { }
